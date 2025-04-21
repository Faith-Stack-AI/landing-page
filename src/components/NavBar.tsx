import React from 'react';

const NavBar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-16 border-b">
      <div className="text-xl font-bold">Spirit-Led AI</div>
      <ul className="flex space-x-8 font-bold">
        <li><a href="#" className="hover:underline">LINK</a></li>
        <li><a href="#" className="hover:underline">LINK</a></li>
        <li><a href="#" className="hover:underline">LINK</a></li>
      </ul>
      <button className="bg-blue-500 text-white font-bold px-8 py-4 rounded">INQUIRE NOW</button>
    </nav>
  );
};

export default NavBar; 