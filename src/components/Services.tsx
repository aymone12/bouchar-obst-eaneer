import React from 'react';
import { Card } from './ui/Card';
import { Zap, Sun, Factory, Grid3X3, Search, Wrench } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Power Systems Design',
      description: 'Comprehensive power generation, transmission, and residential solutions tailored to your specific needs.'
    },
    {
      icon: <Sun className="w-8 h-8" />,
      title: 'Renewable Energy Solutions',
      description: 'Solar, wind, and sustainable energy systems designed to minimize environmental impact while maximizing efficiency.'
    },
    {
      icon: <Factory className="w-8 h-8" />,
      title: 'Industrial Automation',
      description: 'Advanced robotics, sensors, and automation systems to improve operational efficiency and productivity.'
    },
    {
      icon: <Grid3X3 className="w-8 h-8" />,
      title: 'Smart Grid Technology',
      description: 'Real-time monitoring, optimization, and management systems for modern electrical grid infrastructure.'
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: 'Energy Audits & Consulting',
      description: 'Professional assessments to reduce operational costs and improve overall energy performance.'
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Maintenance & Support',
      description: 'Comprehensive preventive maintenance and emergency service support for all electrical systems.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Comprehensive electrical engineering solutions for every need
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-6" hover>
              <div className="text-emerald-400 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};