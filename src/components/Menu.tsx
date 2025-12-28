import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { menuData, tableDHoete } from '../data/menuData';
import SEO from './SEO';
import { getMenuSchema } from '../lib/schema';
import { ArrowLeft } from 'lucide-react';

const Menu: React.FC = () => {
  const { category } = useParams<{ category?: string }>();

  const filteredMenu = useMemo(() => {
    if (!category) return menuData;
    return menuData.filter((s) => s.id === category);
  }, [category]);

  const activeSection = useMemo(() => {
    if (!category) return null;
    return menuData.find((s) => s.id === category);
  }, [category]);

  const title = activeSection
    ? `${activeSection.title} - Menu`
    : "Notre Menu Gastronomique";

  const description = activeSection
    ? `Découvrez nos délicieux ${activeSection.title.toLowerCase()} chez Aux 2 Violons à Québec. Authentique cuisine méditerranéenne.`
    : "Explorez notre menu varié : Couscous, Tajines, Grillades et plus. Apportez votre vin et savourez l'Orient à Québec.";

  return (
    <div id="menu" className="relative min-h-screen pt-24 pb-16 bg-cream">
      <SEO
        title={title}
        description={description}
        canonical={category ? `/menu/${category}` : "/menu"}
        ogType="menu"
        schema={getMenuSchema()}
      />

      {/* Hero Section for Menu */}
      <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden mb-12">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
          style={{ backgroundImage: 'url("/Assets/Menu.png")' }}
        >
          <div className="absolute inset-0 bg-burgundy/40 backdrop-blur-[2px]"></div>
        </div>
        <div className="relative z-10 text-center text-cream px-4">
          <h1 className="text-4xl md:text-6xl font-serif mb-4 drop-shadow-lg">
            {activeSection ? activeSection.title : "L'Art Culinaire"}
          </h1>
          <p className="text-xl md:text-2xl font-light italic mb-6">Apportez Votre Vin</p>
          {category && (
            <Link
              to="/menu"
              className="inline-flex items-center text-gold hover:text-white transition-colors gap-2"
            >
              <ArrowLeft size={20} /> Voir tout le menu
            </Link>
          )}
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Category Navigation (Internal Linking for SEO) */}
        {!category && (
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {menuData.map((section) => (
              <Link
                key={section.id}
                to={`/menu/${section.id}`}
                className="px-6 py-2 border border-gold/30 rounded-full text-burgundy hover:bg-gold hover:text-white transition-all duration-300 shadow-sm"
              >
                {section.title}
              </Link>
            ))}
          </div>
        )}

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {filteredMenu.map((section, idx) => (
              <section
                key={section.id}
                className={`mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <h2 className="text-2xl font-serif text-burgundy whitespace-nowrap">{section.title}</h2>
                  <div className="h-[1px] w-full bg-gold/30"></div>
                </div>

                {section.description && (
                  <p className="text-sm italic text-burgundy/70 mb-4">{section.description}</p>
                )}

                <div className="space-y-6">
                  {section.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="group">
                      <div className="flex justify-between items-baseline mb-1">
                        <h3 className="text-lg font-medium group-hover:text-gold transition-colors">
                          {item.name}
                        </h3>
                        {item.price && (
                          <span className="text-burgundy font-serif font-semibold ml-4">
                            {typeof item.price === 'number' ? item.price.toFixed(2) : item.price}$
                          </span>
                        )}
                      </div>

                      {item.description && (
                        <p className="text-sm text-burgundy/60 font-light">{item.description}</p>
                      )}

                      {item.prices && (
                        <div className="space-y-1 ml-4 mt-2 border-l border-gold/20 pl-4">
                          {item.prices.map((p, pIdx) => (
                            <div key={pIdx} className="flex justify-between text-sm">
                              <span className="text-burgundy/70 italic">{p.label}</span>
                              <span className="font-medium">{typeof p.value === 'number' ? p.value.toFixed(2) : p.value}$</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Table d'hôte - Full Width Showcase */}
          {(!category || category === 'table-dhote') && (
            <section className="mt-16 p-8 md:p-12 bg-burgundy text-cream rounded-2xl shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full -mr-32 -mt-32 transition-transform group-hover:scale-110"></div>

              <div className="relative z-10">
                <div className="flex flex-col items-center text-center mb-12">
                  <span className="text-gold uppercase tracking-[0.3em] text-sm mb-4">Expérience Signature</span>
                  <h2 className="text-4xl md:text-5xl font-serif mb-4">{tableDHoete.title}</h2>
                  <div className="w-24 h-1 bg-gold"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {tableDHoete.sections.map((section, idx) => (
                    <div key={idx} className="space-y-4">
                      <h3 className="text-xl font-serif text-gold border-b border-gold/30 pb-2">{section.label}</h3>
                      {section.content && <p className="italic">{section.content}</p>}
                      {section.items && (
                        <div className="space-y-3">
                          {section.items.map((item, iIdx) => (
                            <div key={iIdx} className="flex justify-between items-center gap-2">
                              <span className="text-sm font-light">{item.name}</span>
                              <span className="text-gold font-serif">{typeof item.price === 'number' ? item.price.toFixed(2) : item.price}$</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t border-gold/20 text-center italic">
                  <p className="text-xl md:text-2xl text-gold mb-2">"{tableDHoete.note}"</p>
                  <p className="text-sm text-cream/60">Une expérience gastronomique complète pour les fins gourmets.</p>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;