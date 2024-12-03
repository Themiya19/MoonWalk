import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const elementRef = React.useRef<HTMLDivElement | null>(null);
  const { ref: inViewRef } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const ref = React.useCallback((node: HTMLDivElement | null) => {
    elementRef.current = node;
    inViewRef(node);
  }, [inViewRef]);

  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <Mail size={24} />,
      title: "Email Us",
      content: "info@moonwalk.com",
      link: "mailto:info@moonwalk.com"
    },
    {
      icon: <MapPin size={24} />,
      title: "Visit Us",
      content: "123 Style Street, Beauty City, BC 12345",
      link: "https://maps.google.com"
    },
    {
      icon: <Clock size={24} />,
      title: "Hours",
      content: "Mon-Sat: 9AM-8PM, Sun: 10AM-6PM"
    }
  ];

  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-dark to-dark/95 relative overflow-hidden">
      {/* Enhanced background decorative elements */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.05)_0%,transparent_50%)]" />
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.05)_0%,transparent_50%)]" />
        <div className="absolute -top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute -bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-[100px] animate-pulse" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          style={{ opacity, scale }}
          className="space-y-16"
        >
          <div className="text-center relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <span className="text-indigo-400 font-medium tracking-wider text-sm">/06</span>
              <h2 className="text-5xl font-light mt-2 mb-6 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                Get in Touch
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">
                Book your appointment or reach out to us for any questions. We're here to help you look and feel your best.
              </p>
            </motion.div>
            {/* Decorative heading background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] 
                           bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-[80px] opacity-60" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Enhanced Contact Form */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 
                          rounded-lg blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500" />
              
              <div className="relative bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 
                          hover:border-indigo-500/30 transition-all duration-300 shadow-2xl shadow-indigo-500/10">
                <div className="absolute top-0 right-0 p-4">
                  <div className="text-white/30 text-xs font-light">01</div>
                </div>
                <form className="space-y-6">
                  {/* Form fields with enhanced styling */}
                  <div className="space-y-1">
                    <label htmlFor="name" className="block text-sm font-medium text-white/70">
                      Name
                    </label>
                    <div className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300" />
                      <input
                        type="text"
                        id="name"
                        className="relative w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg 
                                 focus:ring-2 focus:ring-indigo-500/50 focus:border-transparent
                                 text-white placeholder-white/30 transition-all duration-300"
                        placeholder="Your name"
                      />
                    </div>
                  </div>
                  
                  {/* Similar styling for other form fields */}
                  <div className="space-y-1">
                    <label htmlFor="email" className="block text-sm font-medium text-white/70">
                      Email
                    </label>
                    <div className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300" />
                      <input
                        type="email"
                        id="email"
                        className="relative w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg 
                                 focus:ring-2 focus:ring-indigo-500/50 focus:border-transparent
                                 text-white placeholder-white/30 transition-all duration-300"
                        placeholder="Your email"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="message" className="block text-sm font-medium text-white/70">
                      Message
                    </label>
                    <div className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300" />
                      <textarea
                        id="message"
                        rows={4}
                        className="relative w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg 
                                 focus:ring-2 focus:ring-indigo-500/50 focus:border-transparent
                                 text-white placeholder-white/30 transition-all duration-300"
                        placeholder="Your message"
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="relative w-full group overflow-hidden px-6 py-3 rounded-lg
                             bg-gradient-to-r from-indigo-500 to-purple-500 text-white
                             transition-all duration-300"
                  >
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-600 to-purple-600 
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative">Send Message</span>
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Enhanced Contact Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -3, scale: 1.01 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 
                              rounded-lg blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                  
                  <div className="relative bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 
                              hover:border-indigo-500/30 transition-all duration-300 shadow-xl shadow-indigo-500/5">
                    <div className="absolute top-0 right-0 p-4">
                      <div className="text-white/30 text-xs font-light">{(index + 2).toString().padStart(2, '0')}</div>
                    </div>
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-white rounded-lg mr-4 
                                    group-hover:from-indigo-500/20 group-hover:to-purple-500/20 transition-all duration-300">
                        {info.icon}
                      </div>
                      <h3 className="font-light text-white">{info.title}</h3>
                    </div>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-white/70 hover:text-white transition-colors"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-white/70">{info.content}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced background effects */}
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

export default Contact;