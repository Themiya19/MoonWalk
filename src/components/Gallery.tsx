import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import GalleryImage from './GalleryImage';

const Gallery = () => {
  const { ref } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Elegant hairstyle"
    },
    {
      src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Modern salon interior"
    },
    {
      src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Hair styling"
    },
    {
      src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Salon atmosphere"
    },
    {
      src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Hair coloring"
    },
    {
      src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Professional styling"
    }
  ];

  return (
    <section id="gallery" className="py-32 bg-gradient-to-b from-dark to-dark/95 relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          style={{ scale, opacity }}
          className="space-y-16"
        >
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-indigo-400 font-medium tracking-wider text-sm">/04</span>
              <h2 className="text-5xl font-light mt-2 mb-6 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                Our Gallery
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">
                Take a look at some of our finest work and get inspired for your next visit.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <GalleryImage 
                key={index} 
                {...image} 
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] 
                      bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-[120px] opacity-50" />
    </section>
  );
};

export default Gallery;