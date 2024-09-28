import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [showHeader, setShowHeader] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
  
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Cuộn xuống và đã cuộn hơn 50px
        setShowHeader(false);
      } else {
        // Cuộn lên
        setShowHeader(true);
      }
  
      // Cập nhật trạng thái isScrolled nếu người dùng đã cuộn hơn 50px
      setIsScrolled(currentScrollY > 50);
  
      // Cập nhật giá trị cuộn cuối cùng
      setLastScrollY(currentScrollY);
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [lastScrollY]);
  
  return (
    <header 
    className={`fixed w-full z-10 transition-all duration-300 p-2
      ${
        showHeader ? 'translate-y-0' : '-translate-y-full'
      } ${isScrolled ? 'bg-white bg-opacity-80 shadow-lg' : 'bg-transparent'}
      `} 
  >
   <nav className="flex justify-between p-4 px-12 md:px-24"> {/* Thay đổi ở đây */}
      <h1 className="text-2xl text-black">My Portfolio</h1>
      <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="w-6 h-6" />
          </button>
        </div>
        <div className={`fixed top-0 left-0 w-full h-full bg-white bg-opacity-90 flex flex-col items-center pt-40 transition-transform duration-300 ${isOpen ? 'translate-y-0' : '-translate-y-full'} md:hidden`}>
          <button onClick={toggleMenu} className="absolute top-4 right-4 text-white">
            <FontAwesomeIcon icon={faTimes} className="w-6 h-6" />
          </button>
          <Link
            to="home"
            smooth={true}
            duration={900} // Cập nhật duration
            onClick={() => setIsOpen(false)} // Đóng menu khi chọn liên kết
            className="mx-6 font-medium text-lg text-black hover:border-b-2 hover:border-gray-500 hover:text-gray-700 transition-all cursor-pointer mb-6"
          >
            Home
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={900} // Cập nhật duration
            onClick={() => setIsOpen(false)} // Đóng menu khi chọn liên kết
            className="mx-6 font-medium text-lg text-black hover:border-b-2 hover:border-gray-500 hover:text-gray-700 transition-all cursor-pointer mb-6"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={900} // Cập nhật duration
            onClick={() => setIsOpen(false)} // Đóng menu khi chọn liên kết
            className="mx-6 font-medium text-lg text-black hover:border-b-2 hover:border-gray-500 hover:text-gray-700 transition-all cursor-pointer mb-6"
          >
            Contact
          </Link>
        </div>
        <div className="hidden md:flex">
          <Link
            to="home"
            smooth={true}
           duration={900}
            className="mx-6 font-medium text-lg text-black hover:border-b-2 hover:border-gray-500 hover:text-gray-700 transition-all cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="projects"
            smooth={true}
           duration={900}
            className="mx-6 font-medium text-lg text-black hover:border-b-2 hover:border-gray-500 hover:text-gray-700 transition-all cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
         duration={900}
            className="mx-6 font-medium text-lg text-black hover:border-b-2 hover:border-gray-500 hover:text-gray-700 transition-all cursor-pointer"
          >
            Contact
          </Link>
        </div>
    </nav>
  </header>
  );
};

export default Header;
