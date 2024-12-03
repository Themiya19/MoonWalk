import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section id="about" className="py-32 bg-gradient-to-b from-dark to-dark/95 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          style={{ scale, opacity }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <div className="relative group">
            <motion.img
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Salon Interior"
              className="rounded-lg shadow-2xl transition-all duration-300 group-hover:shadow-indigo-500/20"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-indigo-500/20 rounded-lg -z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-2xl -z-10" />
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-indigo-400 font-medium tracking-wider text-sm">/02</span>
              <h2 className="text-5xl font-light mt-2 mb-8 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                Our Story
              </h2>
              <p className="text-white/80 mb-6 leading-relaxed text-lg">
                Moon Walk was founded with a vision to create a sanctuary where beauty meets tranquility. 
                Our expert stylists combine years of experience with the latest trends to deliver 
                exceptional results that enhance your natural beauty.
              </p>
              <p className="text-white/70 mb-16 leading-relaxed">
                We believe that every client deserves a personalized experience that makes them feel 
                confident and refreshed. Our commitment to excellence and attention to detail ensures 
                that you leave our salon looking and feeling your absolute best.
              </p>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { number: "10+", label: "Years Experience" },
                  { number: "5k+", label: "Happy Clients" },
                  { number: "15+", label: "Expert Stylists" }
                ].map((stat, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 
                             hover:border-indigo-500/30 transition-all duration-300"
                  >
                    <h3 className="text-4xl font-light text-white mb-2">{stat.number}</h3>
                    <p className="text-white/60 text-sm">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] 
                      bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-[120px] opacity-50" />

      <motion.div 
        style={{ 
          opacity: useTransform(scrollYProgress, [0.7, 1], [0, 1])
        }}
        className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"
      />
    </section>
  );
};

export default About;