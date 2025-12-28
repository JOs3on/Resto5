
import SectionHeader from './SectionHeader';

const Gallery = () => {
  const images = [
    { url: '/Assets/couscousroyal2.jpg', alt: 'Couscous Royal Gastronomique' },
    { url: '/Assets/salade.jpg', alt: 'Salade Méditerranéenne Fraîche' },
    { url: '/Assets/Brochette.jpg', alt: 'Brochettes Grillées au Feu de Bois' },
    { url: '/Assets/bourek.jpg', alt: 'Bourek Traditionnel' },
    { url: '/Assets/Tajine.jpg', alt: 'Tajine d\'Agneau aux Olives' },
    { url: '/Assets/couscous3.jpg', alt: 'Couscous Berbère Authentique' },
    { url: '/Assets/pastilla.jpg', alt: 'Pastilla au Poulet et Amandes' },
    { url: '/Assets/sousmarin.jpg', alt: 'Sous-marin façon Aux 2 Violons' }
  ];

  return (
    <section id="gallery" className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Une Invitation Visuelle"
          subtitle="Galerie"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-lg border border-gold/10 hover:shadow-2xl transition-all duration-500"
            >
              <img
                src={image.url}
                alt={image.alt}
                loading="lazy"
                className="w-full h-80 object-cover transform scale-100 group-hover:scale-110 transition duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 flex items-end p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-cream font-medium tracking-wide translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;