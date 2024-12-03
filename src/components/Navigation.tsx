import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect current section
      const sections = ['home', 'about', 'services', 'gallery', 'testimonials', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About', theme: 'dark' },
    { href: '#services', label: 'Services', theme: 'light' },
    { href: '#gallery', label: 'Gallery', theme: 'dark' },
    { href: '#testimonials', label: 'Testimonials', theme: 'light' },
    { href: '#contact', label: 'Contact', theme: 'dark' },
  ];

  const getNavStyles = () => {
    const baseStyles = 'fixed w-full z-50 transition-all duration-500';
    if (!isScrolled) return `${baseStyles} bg-transparent`;

    switch (activeSection) {
      case 'services':
      case 'testimonials':
        return `${baseStyles} bg-white/10 backdrop-blur-md border-b border-gray-200/10`;
      default:
        return `${baseStyles} bg-dark/10 backdrop-blur-md border-b border-white/10`;
    }
  };

  const getLinkStyles = (href: string) => {
    const isActive = href.slice(1) === activeSection;
    const baseStyles = "relative text-sm tracking-wider transition-all duration-300";
    
    if (isActive) {
      return `${baseStyles} text-indigo-400 font-medium`;
    }

    switch (activeSection) {
      case 'services':
      case 'testimonials':
        return `${baseStyles} text-gray-800 hover:text-indigo-600`;
      default:
        return `${baseStyles} text-white/70 hover:text-white`;
    }
  };

  const getButtonStyles = () => {
    const baseStyles = "px-6 py-2 rounded-lg transition-all duration-300 text-sm tracking-wider";
    
    switch (activeSection) {
      case 'services':
      case 'testimonials':
        return `${baseStyles} bg-gradient-to-r from-indigo-600 to-purple-600 text-white 
                hover:from-indigo-700 hover:to-purple-700`;
      default:
        return `${baseStyles} bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm`;
    }
  };

  return (
    <nav className={getNavStyles()}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <a href="#" className={`text-2xl font-bold tracking-wider ${
              ['services', 'testimonials'].includes(activeSection) ? 'text-gray-800' : 'text-white'
            }`}>
              Moon Walk
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={getLinkStyles(link.href)}
                >
                  {link.label}
                  {link.href.slice(1) === activeSection && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-indigo-400"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </a>
              ))}
              <button className={getButtonStyles()}>
                Book Now
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={['services', 'testimonials'].includes(activeSection) ? 'text-gray-800' : 'text-white'}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden backdrop-blur-lg bg-dark/90"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`block px-3 py-2 text-base ${getLinkStyles(link.href)}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button className={`w-full ${getButtonStyles()} mt-4`}>
              Book Now
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navigation;