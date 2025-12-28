import { siteConfig } from '../data/siteConfig';
import { menuData } from '../data/menuData';

export const getRestaurantSchema = () => ({
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": siteConfig.name,
    "image": siteConfig.ogImage,
    "@id": siteConfig.url,
    "url": siteConfig.url,
    "telephone": siteConfig.contact.phone,
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "310 Boul. René Lévesque Ouest",
        "addressLocality": "Québec",
        "addressRegion": "QC",
        "postalCode": "G1S1R9",
        "addressCountry": "CA"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": 46.8041,
        "longitude": -71.2339
    },
    "openingHoursSpecification": [
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "17:00",
            "closes": "22:00"
        },
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Thursday", "Friday"],
            "opens": "11:00",
            "closes": "14:00"
        }
    ],
    "menu": `${siteConfig.url}/menu`,
    "servesCuisine": ["Méditerranéenne", "Maghrébine", "Couscous", "Tajines", "Grillades"]
});

export const getMenuSchema = () => ({
    "@context": "https://schema.org",
    "@type": "Menu",
    "name": `Menu - ${siteConfig.name}`,
    "mainEntityOfPage": `${siteConfig.url}/menu`,
    "hasMenuSection": menuData.map(section => ({
        "@type": "MenuSection",
        "name": section.title,
        "hasMenuItem": section.items.map(item => ({
            "@type": "MenuItem",
            "name": item.name,
            "offers": {
                "@type": "Offer",
                "price": typeof item.price === 'number' ? item.price : undefined,
                "priceCurrency": "CAD"
            }
        }))
    }))
});
