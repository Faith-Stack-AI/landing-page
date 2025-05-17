import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // For local development preview only
  const handleSubmit = (e: React.FormEvent) => {
    if (process.env.NODE_ENV === 'development') {
      e.preventDefault();
      setIsSubmitting(true);
      
      // Simulate form submission in development
      setTimeout(() => {
        setIsSubmitted(true);
        setIsSubmitting(false);
      }, 800);
    }
    // In production, let the form submit naturally to FormSubmit.co
  };

  return (
    <div className="bg-white rounded-3xl shadow-md p-8 md:p-10" id="contact">
      <h2 className="text-3xl md:text-4xl font-medium mb-6 text-center">Contact Us</h2>
      <p className="text-gray-700 mb-8 text-center max-w-2xl mx-auto">
        Ready to explore how we can enhance your church&apos;s digital presence? Fill out the form below, and we&apos;ll be in touch soon.
      </p>

      {isSubmitted ? (
        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
          <svg className="w-12 h-12 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-lg font-medium text-green-800 mb-2">Thank you for reaching out!</h3>
          <p className="text-green-700">Your message has been sent successfully. We&apos;ll get back to you as soon as possible.</p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="mt-6 px-6 py-2 bg-white border border-green-500 text-green-600 rounded-full hover:bg-green-50 transition-colors font-medium text-sm"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form
          action="https://formsubmit.co/el/kivapu"
          method="POST"
          onSubmit={handleSubmit}
          className="space-y-6 max-w-2xl mx-auto"
        >
          {/* FormSubmit.co configuration fields */}
          <input type="hidden" name="_subject" value="New contact form submission" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_honey" value="" style={{ display: 'none' }} />
          <input type="hidden" name="_url" value={typeof window !== 'undefined' ? window.location.href : ''} />
          
          {process.env.NODE_ENV === 'development' && (
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg mb-4">
              <p className="text-yellow-800 text-sm">Development Mode - Form submissions will be simulated</p>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8773e3] focus:border-transparent transition-colors"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8773e3] focus:border-transparent transition-colors"
                placeholder="your.email@example.com"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="churchName" className="block text-sm font-medium text-gray-700 mb-1">
              Church or Organization Name
            </label>
            <input
              type="text"
              id="churchName"
              name="churchName"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8773e3] focus:border-transparent transition-colors"
              placeholder="Your church or organization"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8773e3] focus:border-transparent transition-colors"
              placeholder="How can we help you?"
            ></textarea>
          </div>
          
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-6 bg-[#8773e3] text-white font-bold rounded-lg hover:bg-[#7361d3] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8773e3] disabled:opacity-70"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm; 