import React from 'react';
import { useNavigate } from 'react-router-dom';

interface NavItem {
  label: string;
  href: string;
  target?: string;
  isPage?: boolean;
}

const Navbar = () => {
  const navigate = useNavigate();
  
  const navItems: NavItem[] = [
    { label: 'Accueil', href: '/' },
    { label: 'Menu', href: '/menu', isPage: true },
    { label: 'Espaces', href: '#spaces' },
    { label: 'Galerie', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    e.preventDefault();
    
    if (item.isPage) {
      // Navigate to separate page
      navigate(item.href);
    } else if (item.href === '/') {
      // Navigate to home page
      navigate('/');
    } else if (item.href.startsWith('#')) {
      // Handle navigation to sections on home page
      const targetId = item.href.substring(1);
      
      // If we're not on the home page, navigate to home first
      if (window.location.pathname !== '/') {
        navigate('/');
        // Need to wait for navigation to complete before scrolling
        setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) {
            window.scrollTo({
              top: element.offsetTop - 80,
              behavior: 'smooth'
            });
          }
        }, 100);
      } else {
        const element = document.getElementById(targetId);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }
    } else {
      // For external links
      window.open(item.href, '_blank');
    }
  };

  return (
    <>
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          onClick={(e) => handleNavClick(e, item)}
          target={item.target || ''}
          rel={item.target ? 'noopener noreferrer' : ''}
          className="text-burgundy hover:text-gold transition duration-300"
        >
          {item.label}
        </a>
      ))}
    </>
  );
};

export default Navbar;