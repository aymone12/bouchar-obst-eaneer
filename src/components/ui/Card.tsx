import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = false 
}) => {
  const baseClasses = 'bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50';
  const hoverClasses = hover ? 'transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-800/70' : '';
  
  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
};