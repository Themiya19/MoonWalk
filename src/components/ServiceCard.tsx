import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  duration: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, price, duration, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-100 to-purple-100 
                      rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative bg-white shadow-lg p-8 rounded-lg border border-gray-100 
                      hover:border-indigo-200 transition-all duration-300">
        <div className="absolute top-0 right-0 p-4">
          <div className="text-gray-300 text-xs font-light">
            {(index + 1).toString().padStart(2, '0')}
          </div>
        </div>

        <h3 className="text-2xl font-light mb-3 bg-gradient-to-r from-gray-800 to-gray-600 
                       bg-clip-text text-transparent">{title}</h3>
        <p className="text-gray-500 mb-8 text-sm leading-relaxed">{description}</p>
        
        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          <span className="text-3xl font-light bg-gradient-to-r from-gray-800 to-gray-600 
                          bg-clip-text text-transparent">{price}</span>
          <div className="flex items-center text-gray-500 bg-gray-50 rounded-full px-3 py-1">
            <Clock size={14} className="mr-1.5" />
            <span className="text-sm">{duration}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;