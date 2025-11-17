import React from 'react';

const Menu: React.FC = () => {
  return (
    <div id="menu" className="relative min-h-screen pt-20">
      {/* Menu background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: 'url("/Assets/Menu.png")' }}
      ></div>
      
      {/* Menu content container */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-xl p-8 max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8 text-amber-900">Notre Menu</h1>
          <p className="text-xl italic font-serif text-center mb-8 text-amber-700">Apportez Votre Vin</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div>
              {/* LES ENTRÉES CHAUDES */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-amber-800 border-b-2 border-amber-600 pb-2 mb-4">LES ENTRÉES CHAUDES</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Chorba frik</span>
                    <span>4,95</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Merguez grillées</span>
                    <span>8,75</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Frites mayonnaise maison</span>
                    <span>4,25</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Doigts de Fatima à la viande</span>
                    <span>10,75</span>
                  </div>
                </div>
              </div>

              {/* LES ENTRÉES FROIDES */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-amber-800 border-b-2 border-amber-600 pb-2 mb-4">LES ENTRÉES FROIDES</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Feuilles de vigne</span>
                    <span>9,75</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Salade de taboulé</span>
                    <span>9,25</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Salade méditerranéenne</span>
                    <span>10,95</span>
                  </div>
                </div>
              </div>

              {/* LES POUTINES */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-amber-800 border-b-2 border-amber-600 pb-2 mb-4">LES POUTINES</h2>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between">
                      <span className="font-medium">Poutine régulière</span>
                    </div>
                    <div className="flex justify-between text-sm pl-4">
                      <span>Midi ou emporter</span>
                      <span>12,00</span>
                    </div>
                    <div className="flex justify-between text-sm pl-4">
                      <span>Soir</span>
                      <span>17,00</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <span className="font-medium">Poutine Aux 2 Violons</span>
                    </div>
                    <div className="flex justify-between text-sm pl-4">
                      <span>Midi ou emporter</span>
                      <span>15,00</span>
                    </div>
                    <div className="flex justify-between text-sm pl-4">
                      <span>Soir</span>
                      <span>19,00</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* NOS BROCHETTES */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-amber-800 border-b-2 border-amber-600 pb-2 mb-4">NOS BROCHETTES</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Brochette de poulet</span>
                    <span>27,00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Brochette d'agneau</span>
                    <span>28,00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Brochette mixte</span>
                    <span>29,00</span>
                  </div>
                </div>
              </div>

              {/* GRILLADES */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-amber-800 border-b-2 border-amber-600 pb-2 mb-4">GRILLADES</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Suprême de poitrine de poulet à l'orientale</span>
                    <span>27,00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Grillades du chef</span>
                    <span>30,00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div>
              {/* COUSCOUS */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-amber-800 border-b-2 border-amber-600 pb-2 mb-4">COUSCOUS</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Couscous aux légumes</span>
                    <span>23,00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Couscous Aux 2 Violons (Shish Taouk)</span>
                    <span>26,00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Couscous au poulet (Cuisse)</span>
                    <span>26,00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Couscous aux merguez</span>
                    <span>26,00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Couscous au jarret d'agneau</span>
                    <span>29,00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Couscous royal</span>
                    <span>30,00</span>
                  </div>
                </div>
              </div>

              {/* TAJINES */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-amber-800 border-b-2 border-amber-600 pb-2 mb-4">TAJINES</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Tajine de poulet aux olives</span>
                    <span>23,00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Tajine agneau</span>
                    <span>26,00</span>
                  </div>
                </div>
              </div>

              {/* LES PLATS MAGHRÉBINS */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-amber-800 border-b-2 border-amber-600 pb-2 mb-4">LES PLATS MAGHRÉBINS</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Assiette falafel</span>
                    <span>23,00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Assiette kefta</span>
                    <span>25,00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Assiette merguez</span>
                    <span>25,00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Assiette shish taouk</span>
                    <span>25,00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Assiette shawarma</span>
                    <span>25,00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Assiette combinée</span>
                    <span>26,00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Pastilla au poulet et amandes</span>
                    <span>25,00</span>
                  </div>
                </div>
              </div>

              {/* LES SOUS-MARINS */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-amber-800 border-b-2 border-amber-600 pb-2 mb-4">LES SOUS-MARINS</h2>
                <p className="text-sm italic mb-2">(avec salades, riz, frites ou semoule)</p>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between">
                      <span className="font-medium">Falafel</span>
                    </div>
                    <div className="flex justify-between text-sm pl-4">
                      <span>Midi ou emporter</span>
                      <span>15,00</span>
                    </div>
                    <div className="flex justify-between text-sm pl-4">
                      <span>Soir</span>
                      <span>21,00</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <span className="font-medium">Shish taouk</span>
                    </div>
                    <div className="flex justify-between text-sm pl-4">
                      <span>Midi ou emporter</span>
                      <span>17,00</span>
                    </div>
                    <div className="flex justify-between text-sm pl-4">
                      <span>Soir</span>
                      <span>22,00</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <span className="font-medium">Shawarma</span>
                    </div>
                    <div className="flex justify-between text-sm pl-4">
                      <span>Midi ou emporter</span>
                      <span>17,00</span>
                    </div>
                    <div className="flex justify-between text-sm pl-4">
                      <span>Soir</span>
                      <span>22,00</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <span className="font-medium">Kefta</span>
                    </div>
                    <div className="flex justify-between text-sm pl-4">
                      <span>Midi ou emporter</span>
                      <span>17,00</span>
                    </div>
                    <div className="flex justify-between text-sm pl-4">
                      <span>Soir</span>
                      <span>22,00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TABLE D'HÔTE - Full width */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-amber-800 border-b-2 border-amber-600 pb-2 mb-4">TABLE D'HÔTE</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">Entrées:</h3>
                <p className="pl-4">Soupe Chorba frik ou Bourrek à la viande</p>
              </div>
              <div>
                <h3 className="font-medium">Plats Principaux:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-4">
                  <div className="flex justify-between">
                    <span>Pastilla au poulet et amandes</span>
                    <span>36,00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Brochette de poulet</span>
                    <span>38,00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tajine Berbère au jarret d'agneau</span>
                    <span>40,00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Grillades du Chef</span>
                    <span>41,00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Couscous Royal</span>
                    <span>39,00</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-medium">Dessert:</h3>
                <p className="pl-4">Café ou thé inclus</p>
              </div>
              <div className="mt-4 p-3 bg-amber-100 rounded-lg">
                <p className="font-medium italic">Note: Faites votre Table d'hôte, choisissez un autre plat à la carte et ajoutez 11.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;