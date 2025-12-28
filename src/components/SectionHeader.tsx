import React from 'react';

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    light?: boolean;
    centered?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
    title,
    subtitle,
    light = false,
    centered = true
}) => {
    return (
        <div className={`mb-12 ${centered ? 'text-center' : 'text-left'} max-w-2xl ${centered ? 'mx-auto' : ''}`}>
            {subtitle && (
                <span className={`uppercase tracking-[0.3em] text-sm mb-3 block ${light ? 'text-gold' : 'text-burgundy/60'}`}>
                    {subtitle}
                </span>
            )}
            <h2 className={`text-4xl md:text-5xl font-serif mb-4 ${light ? 'text-cream' : 'text-burgundy'}`}>
                {title}
            </h2>
            <div className={`h-1 w-20 ${light ? 'bg-gold' : 'bg-gold'} ${centered ? 'mx-auto' : ''}`}></div>
        </div>
    );
};

export default SectionHeader;
