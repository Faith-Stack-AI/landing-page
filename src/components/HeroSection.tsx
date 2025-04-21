import React from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-16 py-40">
      <div className="max-w-2xl">
        <h1 className="text-7xl font-md mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
        <p className="text-lg mb-6">The first AI-powered digital ministry team designed to listen, engage, and surface insights about congregants, seekers, and visitors — while speaking the spiritual language of your church.</p>
        <div className="flex space-x-4">
          <button className="bg-blue-500 text-white font-bold px-8 py-4 rounded">INQUIRE NOW</button>
          <button className="flex items-center space-x-2">
            <span className="bg-blue-500 text-white p-4 rounded-full">▶</span>
            <span className="font-bold">WATCH DEMO</span>
          </button>
        </div>
      </div>
      <div className="flex-shrink-0 mt-8 md:mt-0">
        <Image src="/public/vercel" alt="Placeholder Image" width={300} height={200} />
      </div>
    </section>
  );
};

export default HeroSection; 