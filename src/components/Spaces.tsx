import React from 'react';

const Spaces = () => {
  const spaces = [
    {
      title: 'Salon Marocain',
      capacity: '20-25 personnes',
      description: 'Un espace intimiste aux couleurs chaudes, décoré dans la pure tradition marocaine.',
      image: '/Assets/salon.png'
    },
    {
      title: 'Grande Salle',
      capacity: '120 personnes',
      description: 'Une salle spacieuse et élégante, parfaite pour vos grands événements.',
      image: '/Assets/salle2.jpg'
    },
    {
      title: 'Salle privée',
      capacity: '50 personnes',
      description: 'Salle privée pouvant accueillir jusqu\'à 50 personnes',
      image: '/Assets/Salle.JPG'
    }
  ];

  return (
    <section id="spaces" className="py-20 bg-burgundy text-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif mb-12 text-center">Nos Espaces Privatisables</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {spaces.map((space) => (
            <div key={space.title} className="group">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={space.image}
                  alt={space.title}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-500" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-2xl font-serif mb-2">{space.title}</h3>
                  <p className="text-gold mb-2">Capacité: {space.capacity}</p>
                  <p className="text-cream/90">{space.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Spaces;