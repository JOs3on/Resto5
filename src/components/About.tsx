import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-serif mb-6">Notre Histoire</h2>
            <p className="text-lg mb-6">
              Aux 2 Violons est né de la passion pour la gastronomie méditerranéenne et de l'amour pour la musique classique. Notre restaurant marie avec élégance les saveurs du Maghreb et le raffinement de la cuisine française.
            </p>
            <p className="text-lg">
              Dans un cadre chaleureux et sophistiqué, nous vous invitons à découvrir une cuisine authentique qui célèbre les produits de saison et les traditions culinaires ancestrales.
            </p>
          </div>
          <div className="relative">
            <img
              src="Assets/sahra.jpg"
              alt="Intérieur du restaurant Aux 2 Violons"
              className="rounded-lg shadow-xl w-full h-auto max-h-[500px] object-cover"
              style={{
                minHeight: '300px',
                maxWidth: '600px',
                margin: '0 auto'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;