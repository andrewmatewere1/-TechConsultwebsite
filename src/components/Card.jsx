import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  hover = true, 
  padding = 'default',
  ...props 
}) => {
  const baseClasses = 'bg-white rounded-xl shadow-lg transition-all duration-300';
  
  const hoverClasses = hover 
    ? 'hover:shadow-xl hover:transform hover:-translate-y-1' 
    : '';
  
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    default: 'p-6',
    lg: 'p-8',
    xl: 'p-10',
  };

  const classes = `${baseClasses} ${hoverClasses} ${paddingClasses[padding]} ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Card;
