import React, { useState } from 'react';
import { Menu, X, Phone, MapPin, Clock, ChevronDown, Facebook, Instagram } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Spaces from './components/Spaces';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import ReservationModal from './components/ReservationModal';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cream text-burgundy">
      {/* Header */}
      <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gold/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="#" className="text-2xl font-serif text-burgundy">
              Aux 2 Violons
            </a>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Navbar />
              <button
                onClick={() => setIsReservationOpen(true)}
                className="px-6 py-2 bg-burgundy text-cream rounded hover:bg-burgundy/90 transition"
              >
                Réserver
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gold/20">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                <Navbar />
                <button
                  onClick={() => setIsReservationOpen(true)}
                  className="px-6 py-2 bg-burgundy text-cream rounded hover:bg-burgundy/90 transition"
                >
                  Réserver
                </button>
              </nav>
            </div>
          </div>
        )}
      </header>

      <main>
        <Hero setIsReservationOpen={setIsReservationOpen} />
        <About />
        <Spaces />
        <Gallery />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-burgundy text-cream py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-serif mb-4">Contact</h3>
              <div className="space-y-2">
                <p className="flex items-center"><Phone className="w-4 h-4 mr-2" /> +33 1 23 45 67 89</p>
                <p className="flex items-center"><MapPin className="w-4 h-4 mr-2" /> 123 Rue de Paris, 75001 Paris</p>
                <p className="flex items-center"><Clock className="w-4 h-4 mr-2" /> Mar-Dim: 12h-14h30, 19h-22h30</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-serif mb-4">Suivez-nous</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gold transition"><Facebook /></a>
                <a href="#" className="hover:text-gold transition"><Instagram /></a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-serif mb-4">Newsletter</h3>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="px-4 py-2 rounded-l bg-white/10 border border-cream/20 text-cream placeholder-cream/50 focus:outline-none focus:border-gold"
                />
                <button className="px-4 py-2 bg-gold text-burgundy rounded-r hover:bg-gold/90 transition">
                  S'inscrire
                </button>
              </form>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-cream/20 text-center">
            <p>&copy; 2024 Restaurant Aux 2 Violons. Tous droits réservés.</p>
          </div>
        </div>
      </footer>

      {/* Reservation Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />
    </div>
  );
}

export default App;