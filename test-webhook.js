// ES modules syntax - fetch is built into Node.js now
import fetch from 'node-fetch';

// Test data that exactly matches the structure in verify-reservation.js
const nom = "Test User";
const telephone = "(555)-123-4567";
const date_reservation = "2023-12-31";
const heure = "19:00";
const personnes = 2;
const captchaToken = "mock-captcha-token-for-testing";

// Make.com webhook URL - same as in the Netlify function
const webhookUrl = 'https://hook.us2.make.com/as8zifuolbgqwflslm2sslevy0d96x9f';

// Create the exact same payload structure as in verify-reservation.js
const webhookPayload = {
  nom,
  telephone,
  date_reservation,
  heure,
  personnes,
  timestamp: new Date().toISOString(),
  reservationId: `RES-${Date.now()}`
};

async function testWebhook() {
  console.log('Sending test data to webhook with the same structure as the actual reservation:');
  console.log(JSON.stringify(webhookPayload, null, 2));
  
  try {
    // Using the exact same fetch configuration as in verify-reservation.js
    const webhookResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(webhookPayload)
    });
    
    // Get the response as text - same as in verify-reservation.js
    const responseText = await webhookResponse.text();
    
    console.log('Response status:', webhookResponse.status);
    console.log('Response headers:', webhookResponse.headers);
    console.log('Response body:', responseText);
    
    if (webhookResponse.ok) {
      console.log('✅ Webhook test successful!');
    } else {
      console.error('❌ Webhook test failed!');
      console.error('Failed to send data to webhook:', webhookResponse.status, webhookResponse.statusText);
    }
  } catch (error) {
    console.error('Error sending test data to webhook:', error);
  }
}

// Run the test
testWebhook();