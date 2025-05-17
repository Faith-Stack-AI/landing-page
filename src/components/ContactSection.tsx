import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type FormValues = {
  name: string;
  email: string;
  churchName?: string;
  message: string;
};

const schema = yup.object({
  name: yup.string().required('Please enter your name'),
  email: yup.string().email('Please enter a valid email').required('Please enter your email'),
  churchName: yup.string().optional(),
  message: yup.string().required('Please enter your message'),
});

const ContactSection: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<FormValues>({
    resolver: yupResolver(schema) as unknown as any
  });

  const [showSuccess, setShowSuccess] = React.useState(false);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      // In a real application, you would send the form data to your server
      console.log('Form submitted:', data);
      
      // Simulate a server delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Reset the form
      reset();
      setShowSuccess(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#8773e3]">
      <div className="px-8 md:px-20 max-w-[1600px] mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-center text-white">Get in Touch</h2>
        <p className="text-lg text-white mb-12 max-w-3xl mx-auto text-center">
          Ready to discuss how we can help your church thrive in the digital age? Reach out to our team and let&apos;s start a conversation.
        </p>

        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-md p-8 md:p-12">
          {showSuccess ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-medium mb-4 text-gray-900">Thank you for reaching out!</h3>
              <p className="text-gray-600 mb-8">
                We&apos;ve received your message and will get back to you shortly.
              </p>
              <button
                onClick={() => setShowSuccess(false)}
                className="px-6 py-3 bg-[#8773e3] text-white font-medium rounded-lg hover:bg-[#7361d3] transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register('name', { required: 'Name is required' })}
                    className={`w-full px-4 py-3 border ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:ring-2 focus:ring-[#8773e3] focus:border-transparent outline-none transition-colors`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    className={`w-full px-4 py-3 border ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:ring-2 focus:ring-[#8773e3] focus:border-transparent outline-none transition-colors`}
                    placeholder="Your email"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="churchName" className="block text-sm font-medium text-gray-700 mb-1">
                  Church or Organization Name
                </label>
                <input
                  id="churchName"
                  type="text"
                  {...register('churchName')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8773e3] focus:border-transparent outline-none transition-colors"
                  placeholder="Your church or organization (optional)"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  {...register('message')}
                  rows={5}
                  className={`w-full px-4 py-3 border ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  } rounded-lg focus:ring-2 focus:ring-[#8773e3] focus:border-transparent outline-none transition-colors`}
                  placeholder="How can we help your church?"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                )}
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-[#FBAF00] text-white font-bold text-sm rounded-lg hover:bg-[#E09E00] transition-colors disabled:opacity-70"
                >
                  {isSubmitting ? 'Sending...' : 'SEND MESSAGE'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;