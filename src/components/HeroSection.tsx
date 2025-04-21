import React from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-16 py-40">
      <div className="max-w-2xl">
        <h1 className="text-7xl font-medium mb-4 leading-tight text-primary">Your church, powered by AI</h1>
        <p className="text-lg mb-6 text-gray-700">The first AI-powered digital ministry team designed to listen, engage, and surface insights about congregants, seekers, and visitors — while speaking the spiritual language of your church.</p>
        <div className="flex space-x-4">
          <button className="bg-[#E5BC49] text-white font-bold px-8 py-4 rounded-full">INQUIRE NOW</button>
          <button className="flex items-center space-x-2">
            <span className="bg-white text-[#0d2a5a] font-bold px-8 py-4 rounded-full border-4 border-[#0d2a5a]">WATCH DEMO</span>
          </button>
        </div>
      </div>
      <div className="flex-shrink-0 mt-8 md:mt-0">
        <Image src="/placeholder.jpeg" alt="Placeholder Image" width={800} height={400} />
      </div>
    </section>
  );
};

export default HeroSection; 