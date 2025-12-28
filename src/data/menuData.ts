export interface MenuItem {
    name: string;
    price?: number | string;
    description?: string;
    prices?: {
        label: string;
        value: number | string;
    }[];
}

export interface MenuSection {
    id: string;
    title: string;
    description?: string;
    items: MenuItem[];
}

export const menuData: MenuSection[] = [
    {
        id: "entrees-chaudes",
        title: "LES ENTRÉES CHAUDES",
        items: [
            { name: "Chorba frik", price: 4.95 },
            { name: "Merguez grillées", price: 8.75 },
            { name: "Frites mayonnaise maison", price: 4.25 },
            { name: "Doigts de Fatima à la viande", price: 10.75 },
        ],
    },
    {
        id: "entrees-froides",
        title: "LES ENTRÉES FROIDES",
        items: [
            { name: "Feuilles de vigne", price: 9.75 },
            { name: "Salade de taboulé", price: 9.25 },
            { name: "Salade méditerranéenne", price: 10.95 },
        ],
    },
    {
        id: "poutines",
        title: "LES POUTINES",
        items: [
            {
                name: "Poutine régulière",
                prices: [
                    { label: "Midi ou emporter", value: 12.00 },
                    { label: "Soir", value: 17.00 },
                ],
            },
            {
                name: "Poutine Aux 2 Violons",
                prices: [
                    { label: "Midi ou emporter", value: 15.00 },
                    { label: "Soir", value: 19.00 },
                ],
            },
        ],
    },
    {
        id: "brochettes",
        title: "NOS BROCHETTES",
        items: [
            { name: "Brochette de poulet", price: 27.00 },
            { name: "Brochette d'agneau", price: 28.00 },
            { name: "Brochette mixte", price: 29.00 },
        ],
    },
    {
        id: "grillades",
        title: "GRILLADES",
        items: [
            { name: "Suprême de poitrine de poulet à l'orientale", price: 27.00 },
            { name: "Grillades du chef", price: 30.00 },
        ],
    },
    {
        id: "couscous",
        title: "COUSCOUS",
        items: [
            { name: "Couscous aux légumes", price: 23.00 },
            { name: "Couscous Aux 2 Violons (Shish Taouk)", price: 26.00 },
            { name: "Couscous au poulet (Cuisse)", price: 26.00 },
            { name: "Couscous aux merguez", price: 26.00 },
            { name: "Couscous au jarret d'agneau", price: 29.00 },
            { name: "Couscous royal", price: 30.00 },
        ],
    },
    {
        id: "tajines",
        title: "TAJINES",
        items: [
            { name: "Tajine de poulet aux olives", price: 23.00 },
            { name: "Tajine agneau", price: 26.00 },
        ],
    },
    {
        id: "plats-maghrebins",
        title: "LES PLATS MAGHRÉBINS",
        items: [
            { name: "Assiette falafel", price: 23.00 },
            { name: "Assiette kefta", price: 25.00 },
            { name: "Assiette merguez", price: 25.00 },
            { name: "Assiette shish taouk", price: 25.00 },
            { name: "Assiette shawarma", price: 25.00 },
            { name: "Assiette combinée", price: 26.00 },
            { name: "Pastilla au poulet et amandes", price: 25.00 },
        ],
    },
    {
        id: "sous-marins",
        title: "LES SOUS-MARINS",
        description: "(avec salades, riz, frites ou semoule)",
        items: [
            {
                name: "Falafel",
                prices: [
                    { label: "Midi ou emporter", value: 15.00 },
                    { label: "Soir", value: 21.00 },
                ],
            },
            {
                name: "Shish taouk",
                prices: [
                    { label: "Midi ou emporter", value: 17.00 },
                    { label: "Soir", value: 22.00 },
                ],
            },
            {
                name: "Shawarma",
                prices: [
                    { label: "Midi ou emporter", value: 17.00 },
                    { label: "Soir", value: 22.00 },
                ],
            },
            {
                name: "Kefta",
                prices: [
                    { label: "Midi ou emporter", value: 17.00 },
                    { label: "Soir", value: 22.00 },
                ],
            },
        ],
    },
];

export const tableDHoete = {
    title: "TABLE D'HÔTE",
    sections: [
        {
            label: "Entrées",
            content: "Soupe Chorba frik ou Bourrek à la viande",
        },
        {
            label: "Plats Principaux",
            items: [
                { name: "Pastilla au poulet et amandes", price: 36.00 },
                { name: "Brochette de poulet", price: 38.00 },
                { name: "Tajine Berbère au jarret d'agneau", price: 40.00 },
                { name: "Grillades du Chef", price: 41.00 },
                { name: "Couscous Royal", price: 39.00 },
            ],
        },
        {
            label: "Dessert",
            content: "Café ou thé inclus",
        },
    ],
    note: "Faites votre Table d'hôte, choisissez un autre plat à la carte et ajoutez 11.",
};
