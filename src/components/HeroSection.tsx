import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-16 py-40">
      <div className="max-w-2xl">
        <div className="h-[180px] relative flex flex-col justify-center overflow-hidden">
          <h1 className="text-7xl font-medium text-primary">
            <TypeAnimation
              sequence={[
                'Your church,\npowered by AI',
                2000,
                'Connect your\ncongregation',
                2000,
                'Empower your\nministry',
                2000,
                'Grow your\ncommunity',
                2000,
              ]}
              wrapper="div"
              speed={50}
              repeat={Infinity}
              cursor={true}
              className="leading-[1.1]"
              style={{ 
                display: 'block', 
                whiteSpace: 'pre-line', 
                height: '100%',
                position: 'absolute',
                top: '0',
                left: '0'
              }}
            />
          </h1>
        </div>
        <p className="text-lg mb-6 text-gray-700">The first AI-powered digital ministry team designed to listen, engage, and surface insights about congregants, seekers, and visitors — while speaking the spiritual language of your church.</p>
        <div className="flex space-x-4">
          <button className="bg-[#E5BC49] text-white font-bold px-8 py-4 rounded-full">INQUIRE NOW</button>
          <button className="flex items-center space-x-2">
            <span className="bg-white text-[#0d2a5a] font-bold px-8 py-4 rounded-full border-3 border-[#0d2a5a]">WATCH DEMO</span>
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