import React from 'react';

const TechnologySection: React.FC = () => {
  return (
    <section id="technology" className="bg-[#8773e3] py-20 text-white">
      <div className="px-8 md:px-20 max-w-[1600px] mx-auto">
        <h2 className="text-4xl md:text-5xl font-medium mb-8 text-center">Our Capabilities</h2>
        
        <p className="text-lg mb-12 max-w-3xl mx-auto text-center">
          We combine cutting-edge technologies with a deep understanding of faith communities 
          to create solutions that enhance ministry impact in the digital age.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all transform hover:-translate-y-1 duration-300 flex flex-col items-center text-center p-6">
            <div className="w-16 h-16 bg-[#f1eeff] rounded-full flex items-center justify-center mb-5 mt-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#8773e3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Innovation</h3>
            <p className="text-gray-600 text-sm">
              Exploring emerging technologies to solve traditional challenges and create meaningful engagement.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all transform hover:-translate-y-1 duration-300 flex flex-col items-center text-center p-6">
            <div className="w-16 h-16 bg-[#f1eeff] rounded-full flex items-center justify-center mb-5 mt-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#8773e3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Connection</h3>
            <p className="text-gray-600 text-sm">
              Building technologies that strengthen community bonds and facilitate authentic connections.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all transform hover:-translate-y-1 duration-300 flex flex-col items-center text-center p-6">
            <div className="w-16 h-16 bg-[#f1eeff] rounded-full flex items-center justify-center mb-5 mt-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#8773e3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Security</h3>
            <p className="text-gray-600 text-sm">
              Prioritizing the privacy of sensitive information with systems built on integrity and trust.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all transform hover:-translate-y-1 duration-300 flex flex-col items-center text-center p-6">
            <div className="w-16 h-16 bg-[#f1eeff] rounded-full flex items-center justify-center mb-5 mt-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#8773e3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Adaptability</h3>
            <p className="text-gray-600 text-sm">
              Creating flexible solutions tailored to the unique needs of different faith communities.
            </p>
          </div>
        </div>
        
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-md text-center max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-medium mb-6 text-gray-900">Let&apos;s Explore Possibilities Together</h3>
          <p className="text-gray-700 mb-8 md:px-8">
            We&apos;re passionate about partnering with forward-thinking faith communities to develop solutions 
            that address your specific challenges and amplify your mission.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-[#8773e3] text-white font-bold text-sm px-8 py-3 rounded-full hover:bg-[#6b5ab3] transition-colors"
          >
            START A CONVERSATION
          </a>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection; 