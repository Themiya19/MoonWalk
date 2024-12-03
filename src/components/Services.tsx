import { motion, useScroll, useTransform, easeOut } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ServiceCard from './ServiceCard';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "30%"],
    { clamp: false }
  );
  
  const overlayOpacity = useTransform(
    scrollYProgress,
    [0, 0.4],
    [1, 0]
  );
  
  const contentOpacity = useTransform(
    scrollYProgress,
    [0.1, 0.4],
    [0, 1]
  );
  
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5],
    [0.95, 1],
    { ease: easeOut }
  );

  const services = [
    {
      title: "Men's Haircut",
      description: "Precision cut tailored to your face shape and style preferences",
      price: "$65+",
      duration: "60 min"
    },
    {
      title: "Color & Highlights",
      description: "Full color or dimensional highlights using premium products",
      price: "$120+",
      duration: "120 min"
    },
    {
      title: "Bridal Styling",
      description: "Complete bridal hair styling including trial session",
      price: "$200+",
      duration: "90 min"
    },
    {
      title: "Keratin Treatment",
      description: "Professional smoothing treatment for frizz-free hair",
      price: "$250+",
      duration: "150 min"
    },
    {
      title: "Hair Extensions",
      description: "Premium quality extensions for added length and volume",
      price: "$300+",
      duration: "180 min"
    },
    {
      title: "Blowout & Styling",
      description: "Professional blow dry and styling for any occasion",
      price: "$45+",
      duration: "45 min"
    }
  ];

  return (
    <section id="services" className="py-32 relative overflow-hidden">
      <motion.div 
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-dark to-dark/95 pointer-events-none"
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50" />

      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
      >
        <motion.div 
          style={{ scale }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full blur-[120px]"
        />
        <motion.div 
          style={{ scale }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-purple-100 to-pink-100 rounded-full blur-[100px]"
        />
      </motion.div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          style={{ opacity: contentOpacity, scale }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-indigo-500 font-medium tracking-wider text-sm">/03</span>
              <h2 className="text-5xl font-light mt-2 mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Our Services
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                Discover our range of professional hair services designed to enhance your natural beauty
                and give you the look you've always dreamed of.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index} 
                {...service} 
                index={index} 
              />
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div 
        style={{ opacity: overlayOpacity }}
        className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-dark to-transparent"
      />
    </section>
  );
};

export default Services;