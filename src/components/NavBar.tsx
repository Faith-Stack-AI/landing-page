import React, { useState } from 'react';
import Image from 'next/image';

const NavBar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center py-4 px-8 lg:px-20 max-w-[1600px] mx-auto w-full relative">
      <div className="flex items-center">
        <div className="flex items-center space-x-2 bg-gray-100 rounded-full py-1 px-4">
          <Image src="/sl_icon.png" alt="Spirit Led AI Logo" width={30} height={30} className="rounded-full" />
          <div className="text-sm font-bold">FAITH STACK AI</div>
        </div>
      </div>
      
      <div className="hidden lg:flex items-center justify-center ml-auto mr-4">
        <div className="border-2 border-gray-300 rounded-full px-8 py-1.5">
          <ul className="flex font-medium text-sm">
            <li className="px-4"><a href="#mission" className="hover:text-[#0d2a5a]">OUR MISSION</a></li>
            <li className="px-4"><a href="#technology" className="hover:text-[#0d2a5a]">TECHNOLOGY</a></li>
            <li className="px-4"><a href="#" className="hover:text-[#0d2a5a]">ABOUT TEAM</a></li>
          </ul>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="bg-[#8773e8] text-white font-bold text-sm px-6 py-2 rounded-full">CONTACT US</button>
        
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
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg z-50 lg:hidden">
          <ul className="flex flex-col py-2">
            <li><a href="#mission" className="block px-6 py-2 hover:bg-gray-100">OUR MISSION</a></li>
            <li><a href="#technology" className="block px-6 py-2 hover:bg-gray-100">OUR TECHNOLOGY</a></li>
            <li><a href="#" className="block px-6 py-2 hover:bg-gray-100">ABOUT TEAM</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar; 