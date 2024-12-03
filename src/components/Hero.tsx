import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 1.1]);

  return (
    <div id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-dark">
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          y,
          scale,
        }}
      >
        <div className="absolute inset-0 gradient-overlay" />
      </motion.div>

      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-24 h-full border-r border-white/10" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-24 h-full border-l border-white/10" />

      <motion.div
        className="relative z-10 text-left px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8">
            <span className="text-white/60 tracking-widest text-sm">/01</span>
            <h2 className="text-xl font-light mt-2">Style Collection</h2>
          </div>
          
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="block">Elevate</span>
            <span className="block text-stroke">Your Style</span>
          </h1>
          
          <p className="text-white/80 max-w-xl text-lg mb-12">
            Experience the art of transformation at Moon Walk, where every visit is a step towards your perfect style.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-lg tracking-wider"
          >
            Book Your Experience
          </motion.button>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-12 left-0 right-0 flex justify-center">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-white/60"
        >
          <span className="block text-sm tracking-widest mb-2">Scroll</span>
          <div className="w-px h-8 bg-white/60 mx-auto" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;