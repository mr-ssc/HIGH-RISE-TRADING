"use client"


import { useState, useEffect } from 'react';
import Link from 'next/link';
import "../Component/Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBars, 
  faTimes, 
  faHome, 
  faIndustry, 
  faBolt, 
  faOilCan, 
  faTools, 
  faShieldAlt, 
  faBath, 
  faLayerGroup,
  faChevronDown,
  faChevronUp,
  faPhone,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', icon: faHome, href: '/' },
    { 
      name: 'Products', 
      icon: faIndustry,
      subItems: [
        { name: 'Mechanical Products', icon: faTools, href: '/products/mechanical' },
        { name: 'Electrical Products', icon: faBolt, href: '/products/electrical' },
        { name: 'Oil and Gas Products', icon: faOilCan, href: '/products/oil-gas' },
        { name: 'Tubefit & Valve Products', icon: faTools, href: '/products/tubefit-valve' },
        { name: 'Plumbing Materials', icon: faTools, href: '/products/plumbing' },
        { name: 'Safety Items', icon: faShieldAlt, href: '/products/safety' },
        { name: 'Sanitary Ware', icon: faBath, href: '/products/sanitary' },
        { name: 'Plywood Items', icon: faLayerGroup, href: '/products/plywood' },
      ]
    },
    { name: 'About Us', icon: faShieldAlt, href: '/about' },
    { name: 'Contact', icon: faPhone, href: '/contact' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link href="/">
            <span className="brand-name">HIGH RISE TRADING</span>
          </Link>
        </div>
        
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          {navItems.map((item, index) => (
            <div key={index} className="nav-item-container">
              {item.subItems ? (
                <>
                  <div 
                    className="nav-item dropdown-toggle" 
                    onClick={() => toggleDropdown(index)}
                  >
                    <FontAwesomeIcon icon={item.icon} className="nav-icon" />
                    <span>{item.name}</span>
                    <FontAwesomeIcon 
                      icon={openDropdown === index ? faChevronUp : faChevronDown} 
                      className="dropdown-chevron" 
                    />
                  </div>
                  <div className={`dropdown-menu ${openDropdown === index ? 'open' : ''}`}>
                    {item.subItems.map((subItem, subIndex) => (
                      <Link key={subIndex} href={subItem.href} className="dropdown-item">
                        <FontAwesomeIcon icon={subItem.icon} className="dropdown-icon" />
                        <span>{subItem.name}</span>
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link href={item.href} className="nav-item">
                  <FontAwesomeIcon icon={item.icon} className="nav-icon" />
                  <span>{item.name}</span>
                </Link>
              )}
            </div>
          ))}
        </div>
        
    
        <div className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;