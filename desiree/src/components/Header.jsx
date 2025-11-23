import React, { useEffect, useState } from 'react';

function Head() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Toggle Mobile Menu
    const toggleMenu = () => {
        setIsMenuOpen(!isScrolled); // Typo fix in logic, should be !isMenuOpen. Fixed below.
        setIsMenuOpen(!isMenuOpen);
    };

    // Handle Scroll Effect (Glassmorphism)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Navigation Links Data
    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#proj' },
        { name: 'Connect', href: '#contactme' },
    ];

    return (
        <header 
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 font-['Poppins'] ${
                isScrolled ? 'bg-black/80 backdrop-blur-md py-4 shadow-[0_4px_30px_rgba(219,10,10,0.1)]' : 'bg-transparent py-6'
            }`}
        >
            <div className="flex justify-between items-center px-[5%] lg:px-[12%]">
                
                {/* --- LOGO --- */}
                <a href="#home" className="text-3xl font-extrabold text-white tracking-wider group">
                    M
                    <span className="text-[#db0a0a] drop-shadow-[0_0_10px_rgba(219,10,10,0.8)] group-hover:text-white transition-colors duration-300">
                        BJ
                    </span>
                </a>

                {/* --- DESKTOP NAVBAR --- */}
                <nav className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.href} 
                            className="relative text-lg font-medium text-white transition-colors duration-300 hover:text-[#db0a0a] group"
                        >
                            {link.name}
                            {/* Animated Underline */}
                            <span className="absolute left-0 bottom-[-5px] w-0 h-[2px] bg-[#db0a0a] transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </nav>

                {/* --- MOBILE MENU ICON --- */}
                <div className="md:hidden">
                    <button 
                        onClick={toggleMenu} 
                        className="text-white text-3xl focus:outline-none"
                    >
                        {/* Simple SVG Icon switching between Menu and Close */}
                        {isMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                        )}
                    </button>
                </div>
            </div>

            {/* --- MOBILE DROPDOWN MENU --- */}
            {/* Creates a slide-down effect */}
            <div className={`md:hidden absolute top-full left-0 w-full bg-[#080707] border-t border-gray-800 overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <nav className="flex flex-col items-center py-6 gap-6">
                    {navLinks.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.href} 
                            onClick={() => setIsMenuOpen(false)} // Close menu when clicked
                            className="text-lg font-medium text-white hover:text-[#db0a0a] transition-colors duration-300 block w-full text-center py-2"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>
            </div>

        </header> 
    );
}
  
export default Head;