import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  isFirst?: boolean;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isFirst }) => {
  const [isOpen, setIsOpen] = useState(isFirst);

  return (
    <div className={`py-6 ${!isFirst ? 'border-t border-gray-200' : ''}`}>
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-medium">{question}</h3>
        <svg
          className={`w-6 h-6 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="mt-4 text-gray-600">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqItems = [
    {
      question: "What is Faith Stack AI?",
      answer: "Faith Stack AI is a technology company focused on empowering faith communities through innovative solutions. We're building the future of digital ministry with a unique approach that combines cutting-edge technology with deep understanding of faith-based organizations."
    },
    {
      question: "What makes Faith Stack AI different?",
      answer: "We bring together a unique combination of technical expertise and deep understanding of faith communities. Our approach is centered around creating meaningful connections and empowering organizations to focus on their core mission while we handle the technical complexities."
    },
    {
      question: "How do you work with faith communities?",
      answer: "We partner with forward-thinking faith organizations to understand their unique needs and challenges. Our collaborative approach ensures that our solutions are tailored to each community's specific context and goals."
    },
    {
      question: "What's your vision for the future?",
      answer: "We envision a future where technology seamlessly enhances the work of faith communities, enabling them to focus on what matters most - building meaningful connections and serving their communities. We're committed to being at the forefront of this transformation."
    }
  ];

  return (
    <section id="faq" className="py-16 px-8 md:px-20 bg-[white] max-w-[1600px] mx-auto scroll-mt-24">
      <h2 className="text-4xl md:text-5xl font-semibold mb-12 text-center">Frequently Asked Questions</h2>
      <div className="max-w-3xl border-b border-gray-200 mx-auto">
        {faqItems.map((item, index) => (
          <FAQItem 
            key={index}
            question={item.question}
            answer={item.answer}
            isFirst={index === 0}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ; 