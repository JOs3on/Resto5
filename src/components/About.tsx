import SectionHeader from './SectionHeader';

const About = () => {
  return (
    <section id="about" className="py-24 bg-cream overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gold/10 rounded-2xl scale-95 group-hover:scale-100 transition-transform duration-700"></div>
            <img
              src="/Assets/sahra.jpg"
              alt="Intérieur raffiné du restaurant Aux 2 Violons"
              loading="lazy"
              className="relative rounded-2xl shadow-2xl w-full h-[600px] object-cover transition-transform duration-700 hover:scale-[1.02]"
            />
            {/* Decorative element */}
            <div className="absolute bottom-8 right-8 bg-burgundy/90 backdrop-blur-md p-6 rounded-xl shadow-xl text-cream max-w-xs transform hover:scale-105 transition-transform">
              <p className="text-gold font-serif text-2xl mb-1">20+</p>
              <p className="text-xs uppercase tracking-widest text-cream/70">Années d'Excellence Culinaire</p>
            </div>
          </div>

          <div className="space-y-8">
            <SectionHeader
              title="L'Héritage d'une Passion"
              subtitle="Notre Histoire"
              centered={false}
            />

            <div className="space-y-6 text-lg text-burgundy/80 leading-relaxed font-light">
              <p>
                <span className="text-burgundy font-serif font-bold text-3xl float-left mr-3 mt-1">A</span>
                ux 2 Violons est né d'une vision audacieuse : marier la richesse de la gastronomie méditerranéenne à l'élégance intemporelle de la culture orientale. Notre nom évoque l'harmonie parfaite entre les saveurs, comme deux instruments s'accordant pour créer une symphonie inoubliable.
              </p>
              <p>
                Situé au cœur de Québec, notre établissement est devenu une destination incontournable pour les amateurs de cuisine authentique. Nous célébrons l'art de recevoir avec chaleur et sophistication, transformant chaque repas en un voyage sensoriel unique.
              </p>
              <div className="pt-4 border-l-4 border-gold pl-6 italic text-xl text-burgundy">
                "Une cuisine qui raconte une histoire, un service qui célèbre l'humain."
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;