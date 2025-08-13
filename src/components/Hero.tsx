import React from 'react';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800"></div>
      
      {/* Particle Effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-emerald-300 rounded-full opacity-40 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-emerald-500 rounded-full opacity-50 animate-pulse delay-500"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-emerald-300 rounded-full opacity-60 animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Electrical Innovation for a{' '}
          <span className="text-emerald-400">Cleaner Future</span>
        </h1>
        
        <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 font-light">
          Next Generation Engineering Solutions
        </h2>
        
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Home to passionate electrical engineers, innovative thinkers, sustainability advocates, 
          and dedicated professionals sharing a greener and more sustainable future through 
          cutting-edge electrical engineering solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg"
            onClick={() => scrollToSection('#contact')}
          >
            Get Started
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => scrollToSection('#about')}
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};