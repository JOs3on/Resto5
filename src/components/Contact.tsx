import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-serif mb-8">Contactez-nous</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="w-6 h-6 mr-4 text-gold" />
                <div>
                  <h3 className="font-semibold mb-1">Téléphone</h3>
                  <p>+33 1 23 45 67 89</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-6 h-6 mr-4 text-gold" />
                <div>
                  <h3 className="font-semibold mb-1">Adresse</h3>
                  <p>123 Rue de Paris<br />75001 Paris</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="w-6 h-6 mr-4 text-gold" />
                <div>
                  <h3 className="font-semibold mb-1">Horaires</h3>
                  <p>Mardi - Dimanche<br />12h00 - 14h30<br />19h00 - 22h30</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Nom</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:border-gold focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:border-gold focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:border-gold focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-burgundy text-cream rounded hover:bg-burgundy/90 transition"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;