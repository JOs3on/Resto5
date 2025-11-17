exports.handler = async (event, context) => {
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  // Handle preflight OPTIONS request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  // Only accept POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ 
        success: false, 
        message: 'Method not allowed. Only POST requests are accepted.' 
      })
    };
  }

  try {
    // Parse the request body
    const requestBody = JSON.parse(event.body);
    const { nom, telephone, date_reservation, heure, personnes, captchaToken } = requestBody;

    if (!nom || !telephone || !date_reservation || !heure || personnes == null) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ 
          success: false, 
          message: 'Missing required fields. Please fill in all form fields.' 
        })
      };
    }
    const personsInt = parseInt(personnes, 10);
    if (!Number.isFinite(personsInt) || personsInt < 1 || personsInt > 20) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ success: false, message: 'Invalid number of people.' })
      };
    }

    const telDigits = String(telephone).replace(/\D+/g, '');
    if (telDigits.length < 10 || telDigits.length > 15) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ success: false, message: 'Invalid phone number.' })
      };
    }

    const dtStr = `${date_reservation} ${heure}`;
    const dt = new Date(dtStr.replace(' ', 'T'));
    const now = new Date();
    if (isNaN(dt.getTime()) || dt < now) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ success: false, message: 'Invalid date or time.' })
      };
    }

    const recaptchaSecret = process.env.RECAPTCHA_SECRET || process.env.RECAPTCHA_SECRET_KEY;
    if (recaptchaSecret) {
      if (!captchaToken) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ success: false, message: 'Captcha token required.' })
        };
      }
      const recaptchaData = new URLSearchParams();
      recaptchaData.append('secret', recaptchaSecret);
      recaptchaData.append('response', captchaToken);
      const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: recaptchaData
      });
      const recaptchaResult = await recaptchaResponse.json();
      if (!recaptchaResult.success) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ success: false, message: 'Captcha verification failed.' })
        };
      }
    }

    console.log('Reservation received:', {
      nom,
      telephone,
      date_reservation,
      heure,
      personnes,
      timestamp: new Date().toISOString()
    });

    const webhookUrl = process.env.MAKE_WEBHOOK_URL || 'https://hook.us2.make.com/as8zifuolbgqwflslm2sslevy0d96x9f';
    const webhookPayload = {
      nom,
      telephone: telDigits,
      date_reservation,
      heure,
      personnes: personsInt,
      timestamp: new Date().toISOString(),
      reservationId: `RES-${Date.now()}`
    };

    try {
      const webhookResponse = await fetch(webhookUrl, {  // Fixed: use 'fetch', not 'fetch2'
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookPayload)
      });

      const responseText = await webhookResponse.text();
      console.log('Webhook response:', responseText);

      if (!webhookResponse.ok) {
        throw new Error(`Webhook ${webhookResponse.status} ${responseText}`);
      } else {
        console.log('Webhook data sent successfully');
      }
    } catch (webhookError) {
      console.error('Error sending data to webhook:', webhookError);
      throw webhookError;
    }

    // Here you would typically:
    // 1. Save the reservation to a database
    // 2. Send confirmation emails to both customer and restaurant
    // 3. Integrate with your reservation management system
    
    // For now, we'll just log the reservation and return success
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        success: true, 
        message: 'Réservation reçue avec succès! Nous vous contacterons pour confirmer.',
        reservationId: `RES-${Date.now()}` // Generate a simple reservation ID
      })
    };

  } catch (error) {
    console.error('Error processing reservation:', error);
    
    // Handle JSON parsing errors
    if (error instanceof SyntaxError) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ 
          success: false, 
          message: 'Invalid request format. Please check your data and try again.' 
        })
      };
    }

    // Handle network errors during reCAPTCHA verification
    if (error.code === 'ENOTFOUND' || error.code === 'ECONNREFUSED') {
      return {
        statusCode: 503,
        headers,
        body: JSON.stringify({ 
          success: false, 
          message: 'Service temporarily unavailable. Please try again later.' 
        })
      };
    }

    // Generic error handler
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        success: false, 
        message: 'An unexpected error occurred. Please try again later.' 
      })
    };
  }
};