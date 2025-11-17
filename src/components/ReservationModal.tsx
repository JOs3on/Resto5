import React, { useState, ChangeEvent, FormEvent } from 'react';
import { X } from 'lucide-react';
import DatePicker from 'react-datepicker';
import ReCAPTCHA from 'react-google-recaptcha';
import 'react-datepicker/dist/react-datepicker.css';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  date: string;
  time: string;
  people: number;
  name: string;
  phone: string;
}

const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    date: '',
    time: '',
    people: 2,
    name: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  const [dateError, setDateError] = useState<string>('');
  const [timeError, setTimeError] = useState<string>('');
  const [captchaToken, setCaptchaToken] = useState<string>('');
  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY as string | undefined;

  const isClosedDay = (date: Date) => {
    const day = date.getDay(); // 0=Sun, 1=Mon, 2=Tue, ... 6=Sat
    return day === 1 || day === 2;
  };
  if (!isOpen) return null;

  const formatPhoneNumber = (value: string): string => {
    // Remove all non-digits
    const digits = value.replace(/\D/g, '');
    
    // Limit to 10 digits
    const limitedDigits = digits.slice(0, 10);
    
    // Format as (XXX)-XXX-XXXX
    if (limitedDigits.length <= 3) {
      return limitedDigits;
    } else if (limitedDigits.length <= 6) {
      return `(${limitedDigits.slice(0, 3)})-${limitedDigits.slice(3)}`;
    } else {
      return `(${limitedDigits.slice(0, 3)})-${limitedDigits.slice(3, 6)}-${limitedDigits.slice(6)}`;
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      setFormData({
        ...formData,
        [name]: formatPhoneNumber(value)
      });
      return;
    }
    
    if (name === 'date') {
      if (value) {
        const [y, m, d] = value.split('-').map(Number);
        const selected = new Date(y, m - 1, d);
        const day = selected.getDay(); // 0=Sun, 1=Mon, 2=Tue
        if (day === 1 || day === 2) {
          setDateError('Le restaurant est fermé le lundi et mardi.');
          setFormData({ ...formData, date: '' });
        } else {
          setDateError('');
          setFormData({ ...formData, date: value });
        }
      } else {
        setDateError('');
        setFormData({ ...formData, date: '' });
      }
      return;
    }

    if (name === 'time') {
      if (value) {
        const [hhStr] = value.split(':');
        const hh = parseInt(hhStr, 10);
        if (Number.isFinite(hh) && hh < 11) {
          setTimeError('Veuillez selectionner une heure après 11:00.');
          setFormData({ ...formData, time: '' });
        } else {
          setTimeError('');
          setFormData({ ...formData, time: value });
        }
      } else {
        setTimeError('');
        setFormData({ ...formData, time: '' });
      }
      return;
    } else if (name === 'people') {
      setFormData({
        ...formData,
        [name]: parseInt(value, 10)
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/.netlify/functions/verify-reservation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nom: formData.name,
          telephone: formData.phone,
          date_reservation: formData.date,
          heure: formData.time,
          personnes: formData.people,
          captchaToken: siteKey ? captchaToken : undefined,
        })
      });

      const data = await response.json();

      if (response.ok && data?.success) {
        setSubmitSuccess(true);
        setTimeout(() => {
          onClose();
          setSubmitSuccess(false);
          setFormData({
            date: '',
            time: '',
            people: 2,
            name: '',
            phone: '',
          });
        }, 3000);
      } else {
        const message = typeof data?.message === 'string' ? data.message : 'Une erreur est survenue lors de l’envoi.';
        console.error('Submission failed:', message);
        alert(`${message} Pour assistance, veuillez appeler le 418-523-1111.`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Une erreur est survenue. Veuillez réessayer. Pour assistance, veuillez appeler le 418-523-1111.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[85vh] overflow-y-auto overscroll-contain">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-serif">Réservation</h2>
          <button onClick={onClose}>
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6">
          {submitSuccess ? (
            <div className="text-center">
              <p className="text-lg text-green-600 mb-2">Réservation envoyée avec succès!</p>
              <p>Nous vous contacterons pour confirmer votre réservation.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="date" className="block text-sm font-medium mb-1">
                  Date
                </label>
                <DatePicker
                  id="date"
                  selected={formData.date ? new Date(`${formData.date}T00:00:00`) : null}
                  onChange={(date: Date | null) => {
                    if (!date) return;
                    if (isClosedDay(date)) {
                      setDateError('Le restaurant est fermé le lundi et mardi.');
                      setFormData({ ...formData, date: '' });
                    } else {
                      setDateError('');
                      setFormData({ ...formData, date: date.toISOString().split('T')[0] });
                    }
                  }}
                  filterDate={(d: Date) => !isClosedDay(d)}
                  minDate={new Date()}
                  dateFormat="yyyy-MM-dd"
                  placeholderText="Choisir une date"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
                {dateError && (
                  <p className="text-red-600 text-sm mt-1">{dateError}</p>
                )}
              </div>
              
              <div className="mb-4">
                <label htmlFor="time" className="block text-sm font-medium mb-1">
                  Heure
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  min="11:00"
                  value={formData.time}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                />
                {timeError && (
                  <p className="text-red-600 text-sm mt-1">{timeError}</p>
                )}
              </div>
              
              <div className="mb-4">
                <label htmlFor="people" className="block text-sm font-medium mb-1">
                  Nombre de personnes
                </label>
                <input
                  type="number"
                  id="people"
                  name="people"
                  min="1"
                  max="20"
                  value={formData.people}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium mb-1">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="(999)-999-9999"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              
              {siteKey && (
                <div className="mb-4">
                  <ReCAPTCHA sitekey={siteKey} onChange={(token) => setCaptchaToken(token || '')} />
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting || !!dateError || !!timeError || (siteKey ? !captchaToken : false)}
                className={`w-full py-2 px-4 rounded-md text-white font-medium ${
                  isSubmitting ? 'bg-gray-400' : 'bg-amber-600 hover:bg-amber-700'
                } transition-colors`}
              >
                {isSubmitting ? 'Envoi en cours...' : 'Réserver'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReservationModal;