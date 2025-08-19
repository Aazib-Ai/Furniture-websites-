import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';
import EmailInput from '../ui/EmailInput';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-orange-500 to-pink-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700`}>
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay in the Loop
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get exclusive offers, new product announcements, and design inspiration delivered straight to your inbox.
          </p>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <EmailInput
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1"
                  required
                />
                <Button
                  type="submit"
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-white/80 mt-3">
                No spam, unsubscribe at any time.
              </p>
            </form>
          ) : (
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-8 max-w-md mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Thank you for subscribing!</h3>
                <p className="text-white/90">Welcome to the FurniSpace family.</p>
              </div>
            </div>
          )}
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute -top-20 -left-20 w-40 h-40 bg-white/10 rounded-full ${isVisible ? 'scale-100' : 'scale-0'} transition-transform duration-1000 delay-300`} />
          <div className={`absolute -bottom-20 -right-20 w-60 h-60 bg-white/10 rounded-full ${isVisible ? 'scale-100' : 'scale-0'} transition-transform duration-1000 delay-500`} />
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;