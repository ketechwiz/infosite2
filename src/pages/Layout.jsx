
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";

const createPageUrl = (pageName) => {
  return pageName === 'Home' ? '/' : `/${pageName}`;
};

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: 'Home' },
    { name: 'Research', path: 'Research' },
    { name: 'Conferences', path: 'Conferences' },
    { name: 'Leadership', path: 'Leadership' },
    { name: 'Resume & Awards', path: 'Resume' },
  ];

  return (
    <div className="min-h-screen bg-[#FDFCF8] text-stone-800 font-sans selection:bg-amber-200 selection:text-amber-900">
      {/* Announcement / Top Bar */}
      <div className="bg-stone-900 text-amber-50 text-xs py-1.5 px-4 text-center tracking-wide uppercase font-medium">
        Innovating at the intersection of AI & Medicine
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#FDFCF8]/80 border-b border-stone-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center">
              <Link to={createPageUrl('Home')} className="text-2xl font-bold tracking-tighter text-stone-900 flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-300 to-amber-600 rounded-lg flex items-center justify-center text-white font-serif italic">
                  R
                </div>
                <span className="hidden sm:block">Ramya Elangovan</span>
              </Link>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={createPageUrl(item.path)}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-amber-600 ${
                    location.pathname.includes(item.path) || (location.pathname === '/' && item.path === 'Home')
                      ? 'text-amber-700 border-b-2 border-amber-500'
                      : 'text-stone-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a href="mailto:ramyacvhs@gmail.com">
                <Button variant="outline" className="border-amber-200 hover:bg-amber-50 hover:text-amber-700 hover:border-amber-300 transition-all text-stone-600 rounded-full px-6">
                  Contact
                </Button>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-stone-600 hover:text-stone-900 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-[#FDFCF8] border-b border-stone-200"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={createPageUrl(item.path)}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-stone-700 hover:text-amber-700 hover:bg-amber-50"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Page Content */}
      <main className="w-full">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#FDFCF8] border-t border-amber-100 mt-20">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-serif font-bold text-stone-900 tracking-tight">Ramya Elangovan</h3>
              <p className="text-amber-700/80 text-sm mt-2 font-medium tracking-wide uppercase">Innovating at the intersection of AI & Medicine</p>
            </div>
            <div className="flex items-center gap-6">
              <a 
                href="https://linkedin.com/in/airamya/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center justify-center w-12 h-12 rounded-full bg-stone-100 hover:bg-[#0077b5] hover:text-white text-stone-600 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:ramyacvhs@gmail.com" 
                className="group flex items-center justify-center w-12 h-12 rounded-full bg-stone-100 hover:bg-amber-600 hover:text-white text-stone-600 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          <div className="mt-12 border-t border-amber-100/50 pt-8 flex flex-col md:flex-row justify-between items-center text-stone-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Ramya Elangovan. All rights reserved.</p>
            <p className="mt-2 md:mt-0 italic font-serif text-amber-800/40">Designed with precision & care.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
