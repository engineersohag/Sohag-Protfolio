import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const SkillCard = ({ 
  icon,
  title,
  tag,
  className = '',
  iconContainerClassName = '',
  ...props 
}) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.05, 
        y: -6,
        transition: { duration: 0.25 } 
      }}
      className={`group relative overflow-hidden rounded-xl 
        py-4 px-2.5 flex flex-col items-center text-center justify-center
        bg-base-100 shadow-md hover:shadow-xl hover:shadow-primary/20
        border border-base-content/10 hover:border-primary/40
        transition-all duration-300 ${className}`}
      {...props}
    >
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-full blur-2xl 
        group-hover:bg-primary/20 transition-all duration-500 -translate-y-1/2 translate-x-1/2"></div>
      
      {/* Icon Container */}
      <div className={`relative z-10 mb-2 p-2 bg-primary/10 text-primary rounded-xl 
        group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 ${iconContainerClassName}`}>
        {icon}
      </div>
      
      {/* Title */}
      <h3 className="relative z-10 text-xs sm:text-sm font-semibold text-base-content 
        group-hover:text-primary transition-colors duration-300 leading-tight">
        {title}
      </h3>

      {/* Tag/Sublabel */}
      {tag && (
        <span className="relative z-10 text-[10px] sm:text-[11px] font-medium text-base-content/60 group-hover:text-primary/90 mt-1 transition-colors leading-tight">
          {tag}
        </span>
      )}

      {/* Hover Shine Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-base-content/5 to-transparent 
          translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
      </div>
    </motion.div>
  );
};

export default SkillCard;