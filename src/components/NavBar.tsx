import React, { useState } from 'react';
import Image from 'next/image';

const NavBar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center py-1 px-8 lg:px-20 max-w-[1600px] mx-auto w-full relative">
      <div className="flex items-center">
        <div className="flex items-center">
          <div className="relative w-22 h-22">
            <Image 
              src="/logo6.png" 
              alt="Faith Stack AI Logo" 
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-semibold text-black tracking-wide">
              Faith Stack <span className="bg-gradient-to-r from-[#8773e3] to-[#FBAF00] bg-clip-text text-transparent font-bold">AI</span>
            </span>
          </div>
        </div>
      </div>
      
      <div className="hidden lg:flex items-center justify-center ml-auto mr-4">
        <div className="bg-white/80 backdrop-blur-sm rounded-full px-8 py-2 shadow-sm border border-gray-100">
          <ul className="flex font-medium text-sm">
            <li className="px-4"><a href="#mission" className="hover:text-[#8773e3] transition-colors">MISSION</a></li>
            {/* <li className="px-4"><a href="#team" className="hover:text-[#8773e3] transition-colors">TEAM</a></li> */}
            <li className="px-4"><a href="#faq" className="hover:text-[#8773e3] transition-colors">FAQ</a></li>
          </ul>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <a 
          href="#contact" 
          className="bg-[#FBAF00] text-white font-bold text-sm px-6 py-2 rounded-full hover:bg-[#E09E00] transition-colors"
        >
          CONTACT US
        </a>
        
        {/* Mobile menu button */}
        <button 
          className="lg:hidden flex items-center" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg z-50 lg:hidden">
          <ul className="flex flex-col py-2">
            <li><a href="#mission" className="block px-6 py-3 hover:bg-gray-50 transition-colors">MISSION</a></li>
            {/* <li><a href="#team" className="block px-6 py-3 hover:bg-gray-50 transition-colors">TEAM</a></li> */}
            <li><a href="#faq" className="block px-6 py-3 hover:bg-gray-50 transition-colors">FAQ</a></li>
            <li><a href="#contact" className="block px-6 py-3 hover:bg-gray-50 transition-colors">CONTACT US</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar; 