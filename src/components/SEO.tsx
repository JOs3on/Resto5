import React from 'react';
import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../data/siteConfig';

interface SEOProps {
    title?: string;
    description?: string;
    canonical?: string;
    ogType?: 'website' | 'restaurant' | 'menu';
    ogImage?: string;
    schema?: object;
}

const SEO: React.FC<SEOProps> = ({
    title,
    description,
    canonical,
    ogType = 'website',
    ogImage,
    schema,
}) => {
    const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
    const metaDescription = description || siteConfig.description;
    const url = canonical ? `${siteConfig.url}${canonical}` : siteConfig.url;
    const image = ogImage || siteConfig.ogImage;

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={metaDescription} />
            <link rel="canonical" href={url} />

            {/* Open Graph */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:url" content={url} />
            <meta property="og:type" content={ogType} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={image} />

            {/* Structured Data */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
