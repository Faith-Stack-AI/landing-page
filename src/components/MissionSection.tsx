import React from 'react';
import Image from 'next/image';

const MissionSection: React.FC = () => {
  return (
    <div className="w-full bg-gray-50">
      <section id="mission" className="px-8 md:px-20 py-20 max-w-[1600px] mx-auto scroll-mt-24">
        <h2 className="text-4xl md:text-5xl font-semibold mb-16 text-center">Our mission</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-24">
          {/* Left side - Diagram */}
          <div className="lg:col-span-2 flex items-center justify-center">
            <div className="relative w-[320px] h-[320px]">
              {/* Outer dashed circle */}
              <div className="absolute w-full h-full rounded-full border-dashed border-2 border-gray-200"></div>
              
              {/* Center image - larger size */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full overflow-hidden">
                <Image 
                  src="/mission-pic.jpg" 
                  alt="Spirit Led AI Technology" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="lg:col-span-3">
            <blockquote className="text-2xl md:text-3xl mb-8 font-medium">
            {/* Times have changed. We're to help empower faith communities through innovative technologies */}
            At Faith Stack AI, we are dedicated to revolutionizing the way churches engage with their communities by harnessing the power of cutting-edge technology.
            </blockquote>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <p className="text-gray-700 mb-6">
                  Our mission is to develop AI-driven solutions and general tech innovations that automate routine tasks, enhance management efficiency, and empower churches to focus on their core mission of spiritual growth and community building.
                </p>
              </div>
              <div>
                <p className="text-gray-700 mb-6">
                  By building tools that streamline operations and foster meaningful connections, we aim to support churches in their journey to inspire, connect, and transform lives in the digital age.
                </p>
              </div>
            </div>
            
            <a href="#" className="inline-block text-[#8773e3] font-medium hover:underline mt-2">
              Learn more
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionSection; 