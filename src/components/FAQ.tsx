import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  isFirst?: boolean;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isFirst }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className={`${isFirst ? '' : 'border-t'} border-gray-200`}>
      <div 
        className={`w-full hover:bg-[#0d2a5a] hover:text-white ${isOpen ? 'bg-[#0d2a5a] text-white' : 'text-primary'} transition-colors duration-200`}
      >
        <button 
          className="flex w-full justify-between items-center text-left font-medium text-lg py-6 px-4 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {question}
          <svg 
            className={`w-5 h-5 transform ${isOpen ? 'rotate-180' : ''} transition-transform duration-200`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
      <div 
        className={`bg-white text-gray-700 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100 py-6 px-4' : 'max-h-0 opacity-0'}`}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqItems = [
    {
      question: "What is Spirit Led AI?",
      answer: "Spirit Led AI is the first AI-powered digital ministry team designed to listen, engage, and surface insights about congregants, seekers, and visitors — while speaking the spiritual language of your church."
    },
    {
      question: "How does it help my church?",
      answer: "Our AI solution helps your church community by providing 24/7 engagement, answering questions about faith and your church specifics, and gathering insights that help you better serve your congregation."
    },
    {
      question: "Is it difficult to implement?",
      answer: "Not at all! Our team helps you get set up quickly and easily, with minimal technical knowledge required. We provide full support throughout the implementation process."
    },
    {
      question: "Can it be customized to our church's specific beliefs?",
      answer: "Absolutely! Spirit Led AI is designed to be fully customizable to reflect your church's specific theology, language, and spiritual approach."
    },
    {
      question: "What about privacy and data security?",
      answer: "We take privacy and security very seriously. All data is encrypted and stored securely, and we comply with all relevant data protection regulations."
    }
  ];

  return (
    <section className="py-16 px-16 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-medium mb-12 text-center text-primary">Frequently Asked Questions</h2>
        <div className="border-b border-gray-200">
          {faqItems.map((item, index) => (
            <FAQItem 
              key={index}
              question={item.question}
              answer={item.answer}
              isFirst={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 