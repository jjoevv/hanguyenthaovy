import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      setLastScrollY(currentScrollY);
    };

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [lastScrollY]);

  return (
    <header className={`fixed w-full z-20 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'} transition-all duration-300`}>
      <nav className="flex justify-between items-center px-4 py-4 md:px-24">
        {/* Logo or Site Name */}
        <h1 className="text-2xl font-bold text-black">My Portfolio</h1>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu (Full-Screen) */}
        <div 
          className={`fixed inset-0 bg-white z-30 flex flex-col items-center justify-center px-20
          transition-transform duration-300 ${isOpen ? 'translate-y-0' : '-translate-y-full'} md:hidden`}
        >
          {/* Close Menu Button */}
          <button onClick={toggleMenu} className="absolute top-6 right-6 text-black focus:outline-none">
            <FontAwesomeIcon icon={faTimes} className="w-6 h-6" />
          </button>

          {/* Menu Links */}
          <Link 
            to="/" 
            onClick={() => setIsOpen(false)} 
            className="text-2xl font-medium text-black my-6"
          >
            Home
          </Link>
          <Link 
            to="/projects" 
            onClick={() => setIsOpen(false)} 
            className="text-2xl font-medium text-black my-6"
          >
            Projects
          </Link>
          <Link 
            to="/contact" 
            onClick={() => setIsOpen(false)} 
            className="text-2xl font-medium text-black my-6"
          >
            Contact
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-lg font-medium text-black hover:text-gray-700">Home</Link>
          <Link to="/projects" className="text-lg font-medium text-black hover:text-gray-700">Projects</Link>
          <Link to="/contact" className="text-lg font-medium text-black hover:text-gray-700">Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
