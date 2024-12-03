import React from 'react';
import { motion } from 'framer-motion';

interface GalleryImageProps {
  src: string;
  alt: string;
  index: number;
}

const GalleryImage: React.FC<GalleryImageProps> = ({ src, alt, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group relative"
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 
                      rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative overflow-hidden rounded-lg aspect-square">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-b from-transparent to-dark/90 
                     flex items-end justify-start p-6 transition-opacity duration-300"
        >
          <div className="space-y-2">
            <span className="text-white/30 text-xs font-light">
              {(index + 1).toString().padStart(2, '0')}
            </span>
            <p className="text-white text-lg font-light">{alt}</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default GalleryImage;