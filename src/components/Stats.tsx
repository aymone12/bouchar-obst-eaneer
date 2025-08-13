import React from 'react';
import { Card } from './ui/Card';

export const Stats: React.FC = () => {
  const stats = [
    { number: '25', label: 'Projects Completed' },
    { number: '25', label: 'Happy Clients' },
    { number: '33', label: 'Expert Engineers' },
    { number: '36', label: 'Success Rate' }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center" hover>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm md:text-base">
                {stat.label}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};