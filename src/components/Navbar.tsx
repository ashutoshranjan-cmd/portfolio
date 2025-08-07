import { motion } from 'framer-motion';
import { useState } from 'react';
import { smoothScroll } from '../utils/smoothScroll';
import { ThemeToggle } from './ThemeToggle';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (href: string) => {
    smoothScroll(href);
    setIsOpen(false);
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-blue-500/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <motion.a
            href="#home"
            className="text-xl font-bold text-black dark:text-white bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleClick('#home')}
          >
            Ashutosh Ranjan
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-black font-bold dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400"
                whileHover={{ y: -2 }}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(item.href);
                }}
              >
                {item.label}
              </motion.a>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {/* {isOpen ? <X /> : <Menu />} */}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? 'auto' : 0,
        }}
        className="md:hidden"
      >
        <div className="px-4 py-2 space-y-2  bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          {navItems.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="block py-2  text-gray-600 dark:text-gray-300  hover:text-purple-500 dark:hover:text-purple-400 font-extrabold "
              whileHover={{ x: 4 }}
              onClick={(e) => {
                e.preventDefault();
                handleClick(item.href);
              }}
            >
              {item.label}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}