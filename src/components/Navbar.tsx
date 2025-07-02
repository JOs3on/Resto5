import React from 'react';

const Navbar = () => {
  const navItems = [
    { label: 'Accueil', href: '#' },
    { label: 'Menu', href: '#menu' },
    { label: 'Espaces', href: '#spaces' },
    { label: 'Galerie', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="text-burgundy hover:text-gold transition duration-300"
        >
          {item.label}
        </a>
      ))}
    </>
  );
};

export default Navbar;