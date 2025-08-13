import React from 'react';
import { Card } from './ui/Card';
import { Target, Leaf, Award, Eye } from 'lucide-react';

export const About: React.FC = () => {
  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Innovation',
      description: 'Pushing boundaries'
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: 'Sustainability',
      description: 'Environmental responsibility'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Quality',
      description: 'Delivering superior quality'
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: 'Transparency',
      description: 'Transparent practices'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            About Eaneer
          </h2>
          <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed mb-12">
            Founded by a team of passionate electrical engineers, Eaneer represents the convergence of technical expertise, 
            environmental consciousness, and innovative thinking. We are committed to transforming the electrical engineering 
            landscape through sustainable solutions that address today's energy challenges while preparing for tomorrow's opportunities.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">Our Mission</h3>
          <Card className="p-8 text-center">
            <p className="text-lg text-gray-300 leading-relaxed">
              "To revolutionize the electrical engineering industry through innovative, sustainable solutions 
              that power a better tomorrow."
            </p>
          </Card>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Our Values</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center" hover>
                <div className="text-emerald-400 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {value.title}
                </h4>
                <p className="text-gray-400 text-sm">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};