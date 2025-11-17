import React from 'react';
import { Phone, MapPin, Clock, Mail } from 'lucide-react';

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
                  <p>418-523-1111</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-6 h-6 mr-4 text-gold" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p><a href="mailto:info@restaurantaux2violons.com" className="hover:text-gold transition">info@restaurantaux2violons.com</a></p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-6 h-6 mr-4 text-gold" />
                <div>
                  <h3 className="font-semibold mb-1">Adresse</h3>
                  <p>310 Boul. René Lévesque Ouest<br />G1S1R9 Québec</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="w-6 h-6 mr-4 text-gold" />
                <div>
                  <h3 className="font-semibold mb-1">Horaires</h3>
                  <p>
                    Mercredi: 17h-21h<br />
                    Jeudi: 11h30h-14h ,17h-21h<br />
                    Vendredi: 11h30h-14h ,17h-22h<br />
                    Samedi: 17h-22h<br />
                    Dimanche: 17h-21h
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-1">
            {/* This div is to occupy the second column and make the first column wider */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;