
import { ChevronDown, Utensils } from 'lucide-react';

interface HeroProps {
  setIsReservationOpen: (isOpen: boolean) => void;
}

const Hero = ({ setIsReservationOpen }: HeroProps) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-linear hover:scale-110"
        style={{
          backgroundImage: 'url("/Assets/Fond.jpeg")',
        }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
      </div>

      {/* Animated Content */}
      <div className="relative z-10 text-center text-cream px-4 max-w-4xl animate-in fade-in zoom-in duration-1000">
        <div className="flex justify-center mb-6 text-gold animate-bounce">
          <Utensils size={40} />
        </div>
        <h1 className="text-5xl md:text-8xl font-serif mb-6 leading-tight drop-shadow-2xl">
          Aux 2 Violons
        </h1>
        <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
        <p className="text-xl md:text-3xl mb-12 font-light italic text-cream/90 tracking-wide leading-relaxed">
          Une symphonie culinaire où la Méditerranée rencontre l'élégance Orientale
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button
            onClick={() => setIsReservationOpen(true)}
            className="px-10 py-4 bg-gold text-burgundy rounded-full text-lg font-bold hover:bg-white hover:scale-105 transition-all duration-300 shadow-xl"
          >
            Réserver une Table
          </button>
          <a
            href="#menu"
            className="px-10 py-4 bg-transparent border-2 border-cream/30 text-cream rounded-full text-lg font-medium hover:bg-cream hover:text-burgundy transition-all duration-300 backdrop-blur-sm"
          >
            Découvrir le Menu
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gold animate-bounce hover:text-white transition-colors"
        aria-label="Scroll to about"
      >
        <ChevronDown className="w-10 h-10" />
      </a>

      {/* Decorative side element */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col items-center gap-8 text-gold/30">
        <div className="w-[1px] h-32 bg-gold/30"></div>
        <span className="rotate-90 uppercase tracking-[0.5em] text-xs whitespace-nowrap">Est. 2004</span>
        <div className="w-[1px] h-32 bg-gold/30"></div>
      </div>
    </section>
  );
};

export default Hero;