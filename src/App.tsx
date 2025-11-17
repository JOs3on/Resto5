import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Menu as MenuIcon, X, Phone, MapPin, Clock, Mail, Facebook, Instagram } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Spaces from './components/Spaces';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import ReservationModal from './components/ReservationModal';
import Menu from './components/Menu';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  
  return (
    <Router>
      <div className="min-h-screen bg-cream text-burgundy">
        {/* Header */}
        <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gold/20">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <a href="/" className="text-2xl font-serif text-burgundy">
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
                {isMenuOpen ? <X /> : <MenuIcon />}
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

        <Routes>
          <Route path="/" element={
            <main>
              <Hero setIsReservationOpen={setIsReservationOpen} />
              <About />
              <Spaces />
              <Gallery />
              <Contact />
            </main>
          } />
          <Route path="/menu" element={<Menu />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-burgundy text-cream py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-serif mb-4">Contact</h3>
                <div className="space-y-2">
                  <p className="flex items-center"><Phone className="w-4 h-4 mr-2" /> 418-523-1111</p>
                  <p className="flex items-center"><Mail className="w-4 h-4 mr-2" /> <a href="mailto:info@restaurantaux2violons.com" className="hover:text-gold transition">info@restaurantaux2violons.com</a></p>
                  <p className="flex items-center"><MapPin className="w-4 h-4 mr-2" /> 310 Boul. René Lévesque Ouest, G1S1R9 Québec</p>
                  <p className="flex items-center"><Clock className="w-4 h-4 mr-2" /> Mercredi - dimanche: 17h-22h<br />Jeudi Et Vendredi: 11h-14h, 17h-22h</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-serif mb-4">Suivez-nous</h3>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-gold transition"><Facebook /></a>
                  <a href="https://www.instagram.com/restaurant.aux2violons/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition"><Instagram /></a>
                </div>
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
    </Router>
  );
}

export default App;