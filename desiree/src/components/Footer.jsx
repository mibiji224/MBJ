import React from 'react';
import { Github, Instagram, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#050505] border-t border-white/10 text-white py-8 px-1 font-sans relative z-10">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* LEFT: Copyright & Branding */}
        <div className="text-center md:text-left">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} <span className="text-white font-bold">DR.S</span>. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-1 flex items-center justify-center md:justify-start gap-1">
            Made with <Heart className="w-3 h-3 text-[#db0a0a] fill-[#db0a0a]" /> in Davao City
          </p>
        </div>

      

        {/* RIGHT: Back to Top Button */}
        <button 
          onClick={scrollToTop}
          className="group flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-[#db0a0a] transition-colors uppercase tracking-widest"
        >
          Back to Top
          <div className="p-2 rounded-full border border-white/10 bg-white/5 group-hover:border-[#db0a0a] group-hover:bg-[#db0a0a] group-hover:text-white transition-all duration-300">
            <ArrowUp className="w-3 h-3" />
          </div>
        </button>

      </div>
    </footer>
  );
};

export default Footer;