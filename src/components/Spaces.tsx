
import SectionHeader from './SectionHeader';

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
    <section id="spaces" className="py-24 bg-burgundy text-cream relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          title="Événements & Réceptions"
          subtitle="Nos Espaces"
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {spaces.map((space, index) => (
            <div
              key={space.title}
              className="group relative h-[450px] overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 hover:-translate-y-2"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img
                src={space.image}
                alt={space.title}
                loading="lazy"
                className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy via-burgundy/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

              <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-3xl font-serif mb-3 text-gold">{space.title}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-[1px] w-8 bg-gold/50"></div>
                  <p className="text-cream/80 font-medium tracking-widest text-xs uppercase">Capacité: {space.capacity}</p>
                </div>
                <p className="text-cream/90 leading-relaxed font-light italic">
                  {space.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Spaces;