
import { Phone, MapPin, Clock, Mail } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { siteConfig } from '../data/siteConfig';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <SectionHeader
              title="Venez nous Visiter"
              subtitle="Contact"
              centered={false}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div className="flex items-start group">
                <div className="bg-gold/10 p-4 rounded-xl mr-5 group-hover:bg-gold/20 transition-colors">
                  <Phone className="w-6 h-6 text-burgundy" />
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-2 text-burgundy">Téléphone</h3>
                  <a href={`tel:${siteConfig.contact.phone}`} className="text-burgundy/70 hover:text-gold transition-colors">
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="bg-gold/10 p-4 rounded-xl mr-5 group-hover:bg-gold/20 transition-colors">
                  <Mail className="w-6 h-6 text-burgundy" />
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-2 text-burgundy">Email</h3>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-burgundy/70 hover:text-gold transition-colors break-all">
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="bg-gold/10 p-4 rounded-xl mr-5 group-hover:bg-gold/20 transition-colors">
                  <MapPin className="w-6 h-6 text-burgundy" />
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-2 text-burgundy">Adresse</h3>
                  <p className="text-burgundy/70 leading-relaxed">
                    {siteConfig.contact.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="bg-gold/10 p-4 rounded-xl mr-5 group-hover:bg-gold/20 transition-colors">
                  <Clock className="w-6 h-6 text-burgundy" />
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-2 text-burgundy">Horaires</h3>
                  <div className="text-burgundy/70 space-y-1 text-sm">
                    {siteConfig.contact.openingHours.map((h, i) => (
                      <p key={i}><span className="font-medium text-burgundy">{h.day}:</span> {h.hours}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <iframe
              title="Google Maps - Aux 2 Violons"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1m3!1d2731.42878!2d-71.2339!3d46.8041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb897000000000:0x00000000000000!2s310%20Boul.%20Ren%C3%A9%20L%C3%A9vesque%20O%2C%20Qu%C3%A9bec%2C%20QC%20G1S%201R9%2C%20Canada!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;