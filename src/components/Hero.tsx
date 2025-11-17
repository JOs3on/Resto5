import React from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  setIsReservationOpen: (isOpen: boolean) => void;
}

const Hero = ({ setIsReservationOpen }: HeroProps) => {
  return (
    <section className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/Assets/Fond.jpeg")',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative h-full flex flex-col items-center justify-center text-center text-cream px-4">
        <h1 className="text-4xl md:text-6xl font-serif mb-6">
          Restaurant Aux 2 Violons
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          Une expérience gastronomique unique où la cuisine méditerranéenne rencontre l'élégance Orientale
        </p>
        <button
          onClick={() => setIsReservationOpen(true)}
          className="px-8 py-3 bg-gold text-burgundy rounded text-lg hover:bg-gold/90 transition"
        >
          Réserver une table
        </button>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cream animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
};

export default Hero;