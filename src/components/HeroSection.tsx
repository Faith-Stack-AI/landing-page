import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-10 pb-0">
      <div className="px-8 md:px-20 max-w-[1600px] mx-auto">
        <div className="flex flex-col xl:flex-row items-start justify-between xl:gap-24">
          {/* Left side - Main headline */}
          <div className="max-w-3xl md:max-w-5xl mb-12 xl:mb-0">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-black leading-tight">
              <span className="block sm:inline">AI for your church.<br /></span>{' '}
              <span className="block sm:inline mt-1 sm:mt-0">
                Let's{' '}
                <span className="text-[#8773e8] inline-block">
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
          <div className="max-w-sm">
            <p className="text-lg text-gray-700 mb-6">
              Innovative technology allows you to connect and empower your congregation through the spiritual language of your church.
            </p>
            <a href="#technology" className="inline-flex items-center font-medium text-[#0d2a5a] group">
              EXPLORE TECHNOLOGY
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

      {/* Full width image - spans the entire viewport width */}
      <div className="mt-12 w-screen relative left-1/2 right-1/2 -mx-[50vw]">
        <div className="w-full aspect-[21/9] relative">
          <Image 
            src="/hero-pic.jpg" 
            alt="Spirit Led AI Technology" 
            fill 
            priority
            sizes="100vw"
            style={{ 
              objectFit: 'cover',
              objectPosition: 'center'
            }} 
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 