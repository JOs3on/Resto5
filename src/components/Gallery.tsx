import React from 'react';

const Gallery = () => {
  const images = [
    {
      url: '/Assets/couscousroyal2.jpg',
      alt: 'Couscous Royal'
    },
    {
      url: '/Assets/salade.jpg',
      alt: 'Salade'
    },
    {
      url: '/Assets/Brochette.jpg',
      alt: 'Brochette'
    },
    {
      url: '/Assets/bourek.jpg',
      alt: 'Bourek'
    },
    {
      url: '/Assets/Tajine.jpg',
      alt: 'Tajine'
    },
    {
      url: '/Assets/couscous3.jpg',
      alt: 'Couscous'
    },
    {
      url: '/Assets/pastilla.jpg',
      alt: 'Pastilla'
    },
    {
      url: '/Assets/sousmarin.jpg',
      alt: 'Sous-marin'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif mb-12 text-center">Notre Galerie</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg">
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;