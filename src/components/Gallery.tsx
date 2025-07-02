import React from 'react';

const Gallery = () => {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      alt: 'Plat signature'
    },
    {
      url: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      alt: 'Cuisine méditerranéenne'
    },
    {
      url: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      alt: 'Dessert'
    },
    {
      url: 'https://images.unsplash.com/photo-1551218372-8a26d077b0ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      alt: 'Ambiance'
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