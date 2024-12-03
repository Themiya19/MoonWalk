import React from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  review: string;
  rating: number;
  image: string;
  index: number;
  scrollProgress: MotionValue<number>;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  name, 
  review, 
  rating, 
  image, 
  index,
  scrollProgress 
}) => {
  // Individual card animations
  const cardY = useTransform(
    scrollProgress,
    [0, 0.5, 1],
    [50 * (index % 3), 0, -50 * (index % 3)]
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      style={{ y: cardY }}
      className="group relative"
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 
                      rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative bg-white shadow-lg p-8 rounded-lg border border-gray-100 
                      hover:border-indigo-200 transition-all duration-300">
        <div className="flex items-center mb-6">
          <div className="relative">
            <img
              src={image}
              alt={name}
              className="w-14 h-14 rounded-lg object-cover mr-4 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 border-2 border-indigo-500/20 rounded-lg -z-10 translate-x-1 translate-y-1" />
          </div>
          <div>
            <h4 className="font-light text-xl bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              {name}
            </h4>
            <div className="flex mt-1">
              {[...Array(rating)].map((_, i) => (
                <Star key={i} size={14} className="fill-current text-indigo-400 mr-1" />
              ))}
            </div>
          </div>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">{review}</p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;