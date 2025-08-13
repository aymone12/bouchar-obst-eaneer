import React from 'react';
import { Card } from './ui/Card';
import image from '../assets/pic-1.png';
import image2 from '../assets/pic-2.png';
import image4 from '../assets/pic-4.png';
import image5 from '../assets/pic-5.png';
import image6 from '../assets/pic-6.png';
import image7 from '../assets/pic-7.png';

export const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Solar Farm Installation',
      description: 'Large-scale solar energy project providing clean power to 5,000+ homes with advanced monitoring systems.',
      image: image
    },
    {
      title: 'Industrial Automation System',
      description: 'Complete factory automation solution increasing production efficiency by 40% while reducing energy consumption.',
      image: image2
    },
    {
      title: 'Smart Building Integration',
      description: 'Intelligent building management system with IoT sensors, automated lighting, and climate control optimization.',
      image: image7
    },
    {
      title: 'Power Grid Modernization',
      description: 'Upgraded electrical infrastructure with smart grid technology improving reliability and reducing outages by 60%.',
      image: image4
    },
    {
      title: 'Renewable Energy Storage',
      description: 'Advanced battery storage system integrating wind and solar power for 24/7 renewable energy availability.',
      image: image5
    },
    {
      title: 'EV Charging Network',
      description: 'Comprehensive electric vehicle charging infrastructure deployment across urban and highway locations.',
      image: image6
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Projects
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Showcasing our expertise through successful implementations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden" hover>
              <div className="relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};