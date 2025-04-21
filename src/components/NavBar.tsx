import React from 'react';
import Image from 'next/image';

const NavBar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-16">
      <div className="flex items-center">
        <Image src="/sl_icon.png" alt="Spirit Led AI Logo" width={50} height={50} />
        <div className="text-xl font-bold ml-2">Spirit Led AI</div>
      </div>
      <ul className="flex space-x-8 font-bold">
        <li><a href="#" className="hover:underline">PRICING</a></li>
        <li><a href="#" className="hover:underline">OUR STORY</a></li>
        <li><a href="#" className="hover:underline">CONTACT</a></li>
      </ul>
      <button className="bg-[#E5BC49] text-white font-bold px-8 py-4 rounded-full">INQUIRE NOW</button>
    </nav>
  );
};

export default NavBar; 