import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Menu as MenuIcon, X, Phone, MapPin, Mail, Facebook, Instagram } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Spaces from './components/Spaces';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import ReservationModal from './components/ReservationModal';
import Menu from './components/Menu';
import SEO from './components/SEO';
import { getRestaurantSchema } from './lib/schema';
import { siteConfig } from './data/siteConfig';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-cream text-burgundy font-sans selection:bg-gold selection:text-burgundy">
        {/* Header */}
        <header className="fixed w-full bg-white/95 backdrop-blur-md z-50 border-b border-gold/10 shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <a href="/" className="text-3xl font-serif text-burgundy tracking-tighter hover:text-gold transition-colors">
                Aux 2 Violons
              </a>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-10 text-sm uppercase tracking-widest font-medium">
                <Navbar />
                <button
                  onClick={() => setIsReservationOpen(true)}
                  className="px-8 py-2.5 bg-burgundy text-cream rounded-full hover:bg-gold hover:text-burgundy transition-all duration-300 shadow-md font-bold"
                >
                  Réserver
                </button>
              </nav>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-burgundy hover:text-gold transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white/98 backdrop-blur-lg border-t border-gold/10 animate-in slide-in-from-top duration-300">
              <div className="container mx-auto px-4 py-8">
                <nav className="flex flex-col space-y-6 text-center">
                  <Navbar />
                  <button
                    onClick={() => {
                      setIsReservationOpen(true);
                      setIsMenuOpen(false);
                    }}
                    className="px-8 py-4 bg-burgundy text-cream rounded-xl hover:bg-gold transition-colors font-bold"
                  >
                    Réserver une Table
                  </button>
                </nav>
              </div>
            </div>
          )}
        </header>

        <Routes>
          <Route path="/" element={
            <main>
              <SEO
                description={siteConfig.description}
                schema={getRestaurantSchema()}
              />
              <Hero setIsReservationOpen={setIsReservationOpen} />
              <About />
              <Spaces />
              <Gallery />
              <Contact />
            </main>
          } />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/:category" element={<Menu />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-burgundy text-cream py-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gold/20"></div>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
              <div className="space-y-6">
                <h3 className="text-3xl font-serif text-gold tracking-tight">Aux 2 Violons</h3>
                <p className="text-cream/70 leading-relaxed font-light italic">
                  "Une immersion culinaire d'exception entre Orient et Occident. Savourez l'art de vivre méditerranéen au cœur de Québec."
                </p>
                <div className="pt-4 flex space-x-6">
                  <a href={siteConfig.links.facebook} className="p-3 border border-gold/20 rounded-full text-gold hover:bg-gold hover:text-burgundy transition-all duration-300"><Facebook size={20} /></a>
                  <a href={siteConfig.links.instagram} target="_blank" rel="noopener noreferrer" className="p-3 border border-gold/20 rounded-full text-gold hover:bg-gold hover:text-burgundy transition-all duration-300"><Instagram size={20} /></a>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-serif mb-8 text-gold uppercase tracking-[0.2em] text-sm">Contact</h3>
                <div className="space-y-6">
                  <a href={`tel:${siteConfig.contact.phone} `} className="flex items-center gap-4 group">
                    <div className="bg-gold/10 p-2 rounded-lg group-hover:bg-gold/20 transition-colors">
                      <Phone className="w-5 h-5 text-gold" />
                    </div>
                    <span className="text-cream/80 group-hover:text-white transition-colors">{siteConfig.contact.phone}</span>
                  </a>
                  <a href={`mailto:${siteConfig.contact.email} `} className="flex items-center gap-4 group">
                    <div className="bg-gold/10 p-2 rounded-lg group-hover:bg-gold/20 transition-colors">
                      <Mail className="w-5 h-5 text-gold" />
                    </div>
                    <span className="text-cream/80 group-hover:text-white transition-colors break-all">{siteConfig.contact.email}</span>
                  </a>
                  <div className="flex items-start gap-4">
                    <div className="bg-gold/10 p-2 rounded-lg">
                      <MapPin className="w-5 h-5 text-gold" />
                    </div>
                    <span className="text-cream/80 leading-relaxed">{siteConfig.contact.address}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-serif mb-8 text-gold uppercase tracking-[0.2em] text-sm">Horaires d'Ouverture</h3>
                <div className="space-y-4 text-cream/80 text-sm font-light">
                  {siteConfig.contact.openingHours.map((h, i) => (
                    <div key={i} className="flex justify-between border-b border-gold/10 pb-2">
                      <span className="font-medium text-cream">{h.day}</span>
                      <span>{h.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-4 bg-gold/5 rounded-xl border border-gold/10">
                  <p className="text-gold text-xs italic text-center">Apportez votre vin !</p>
                </div>
              </div>
            </div>

            <div className="mt-20 pt-10 border-t border-gold/10 text-center">
              <p className="text-cream/40 text-xs tracking-widest uppercase">
                &copy; {new Date().getFullYear()} {siteConfig.name} • Design Gastronomique
              </p>
            </div>
          </div>
        </footer>

        {/* Reservation Modal */}
        <ReservationModal
          isOpen={isReservationOpen}
          onClose={() => setIsReservationOpen(false)}
        />
      </div>
    </Router>
  );
}

export default App;