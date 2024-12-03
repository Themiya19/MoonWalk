import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
  const { ref: inViewRef } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollRef = React.useRef(null);

  const ref = (node: any) => {
    scrollRef.current = node;
    inViewRef(node);
  };

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"]
  });

  // Enhanced scroll-based animations
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  // Parallax effect for decorative elements
  const leftBgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const rightBgY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  const testimonials = [
    {
      name: "Sarah Johnson",
      review: "Absolutely love what they did with my hair! The attention to detail and personalized service is outstanding.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Emily Davis",
      review: "The stylists here are true artists. They transformed my look completely and I couldn't be happier!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Michael Chen",
      review: "Professional, friendly, and incredibly skilled. Best salon experience I've ever had.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    }
  ];

  return (
    <section id="testimonials" className="py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Parallax background elements */}
      <motion.div 
        style={{ y: leftBgY }}
        className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full blur-[120px]" />
      </motion.div>
      
      <motion.div 
        style={{ y: rightBgY }}
        className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
      >
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-purple-100 to-pink-100 rounded-full blur-[100px]" />
      </motion.div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          style={{ 
            opacity,
            scale,
            y: contentY
          }}
          className="space-y-16"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-indigo-500 font-medium tracking-wider text-sm">/05</span>
              <h2 className="text-5xl font-light mt-2 mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Client Reviews
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                Don't just take our word for it. Here's what our clients have to say about their
                experience at Moon Walk.
              </p>
            </motion.div>
          </div>

          <motion.div 
            style={{ y: backgroundY }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index} 
                {...testimonial} 
                index={index}
                scrollProgress={scrollYProgress}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Center gradient overlay with parallax */}
      <motion.div 
        style={{ 
          y: useTransform(scrollYProgress, [0, 1], ["0%", "30%"]),
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 0.3, 0])
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] 
                   bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-[120px]"
      />
    </section>
  );
};

export default Testimonials;