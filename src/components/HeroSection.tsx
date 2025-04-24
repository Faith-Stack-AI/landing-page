import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32 bg-gradient-to-br from-[#f8f9ff] to-[#D9D4F2]">
      <div className="px-8 md:px-20 max-w-[1600px] mx-auto relative z-10">
        <div className="flex flex-col xl:flex-row items-center xl:items-center justify-between xl:gap-24">
          {/* Left side - Main headline */}
          <div className="max-w-3xl md:max-w-5xl mb-12 xl:mb-0">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-black leading-tight">
              <span className="block sm:inline">AI for your church.</span>{' '}<br />
              <span className="block sm:inline mt-1 sm:mt-0">
                Let's{' '}
                <span className="text-[#8773e3] inline-block">
                  <TypeAnimation
                    sequence={[
                      'improve',
                      3000,
                      'enhance',
                      3000,
                      'transform',
                      3000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </span>
                experiences.
              </span>
            </h1>
          </div>

          {/* Right side - Description and CTA */}
          <div className="max-w-md flex flex-col xl:py-8 bg-white/70 backdrop-blur-sm p-8 rounded-3xl shadow-sm border border-white/50">
            <p className="text-lg text-gray-700 mb-6 font-medium">
              Innovative technology allows you to connect and empower your congregation through the spiritual language of your church.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center font-medium bg-[#8773e3] text-white py-3 px-6 rounded-full hover:bg-[#7361d3] transition-colors"
              >
                CONTACT US
                <svg 
                  className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor"
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 