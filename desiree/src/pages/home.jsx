import { useEffect, useState, useLayoutEffect, useRef } from 'react';
import RippleBackground from './RippleBackground';
import gsap from 'gsap';

function Home() {
    // Reference for GSAP Scope
    const comp = useRef(null);

    // 1. Define your roles here
    const roles = [
        "a Web Developer",
        "a Student Leader",
        "a Tech Support",
        "an Assistant"
    ];

    // 2. State to track which role to show
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

    // 3. Cycle through roles every 4 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [roles.length]);

    // 4. GSAP ENTRANCE ANIMATION
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const t1 = gsap.timeline();

            // Animate all elements with the class 'gsap-reveal'
            t1.from(".gsap-reveal", {
                y: 50,          // Move from 50px down
                opacity: 0,     // Start invisible
                duration: 1,    // Takes 1 second
                stagger: 0.1,   // Delay 0.1s between each element
                ease: "power3.out", // Smooth deceleration
                delay: 0.2      // Wait a tiny bit after load
            })
            // Animate the image coming from the right
            .from(".gsap-image-reveal", {
                x: 100,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out"
            }, "-=1"); // Start this 1 second before the text finishes (overlap)

        }, comp); // Scope to this component

        return () => ctx.revert(); // Cleanup on unmount
    }, []);

    return (
        <div ref={comp} className="relative min-h-[100dvh] w-full bg-transparent text-white font-['Poppins'] overflow-hidden selection:bg-[#db0a0a] selection:text-black">
            <RippleBackground />

            {/* --- CUSTOM STYLES & ANIMATIONS --- */}
            <style>
                {`
                @keyframes textCycle {
                    0% { opacity: 0; transform: translateY(100%) scale(0.95) skewY(4deg); filter: blur(4px); }
                    10% { opacity: 1; transform: translateY(0) scale(1.05) skewY(0deg); filter: blur(0); }
                    85% { opacity: 1; transform: translateY(0) scale(1.05) skewY(0deg); filter: blur(0); }
                    100% { opacity: 0; transform: translateY(-100%) scale(0.95) skewY(-4deg); filter: blur(4px); }
                }
                
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                    100% { transform: translateY(0px); }
                }

                .bg-grid {
                    background-size: 40px 40px;
                    background-image: linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                                      linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
                }
                `}
            </style>

            {/* --- BACKGROUND ELEMENTS --- */}
            <div className="absolute inset-0 bg-grid z-0 pointer-events-none"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 lg:w-96 lg:h-96 bg-[#db0a0a] opacity-20 blur-[100px] lg:blur-[150px] rounded-full z-0"></div>

            <section className="relative z-10 min-h-[100dvh] flex flex-col-reverse lg:flex-row items-center justify-center px-4 sm:px-8 lg:px-20 gap-8 lg:gap-20 py-12 lg:py-0" id="home">

                {/* --- LEFT: TEXT CONTENT --- */}
                <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left w-full max-w-2xl lg:max-w-none">

                    {/* Added gsap-reveal class */}
                    <span className="gsap-reveal text-[#db0a0a] font-bold tracking-widest uppercase text-xs sm:text-sm lg:text-base mb-3 lg:mb-4 block">
                        Welcome to my Portfolio
                    </span>

                    <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold leading-tight tracking-tight">
                        {/* Added gsap-reveal class */}
                        <span className="gsap-reveal block">Hello, I'm</span>
                        
                        {/* Added gsap-reveal class */}
                        <span className="gsap-reveal block text-transparent bg-clip-text bg-gradient-to-r from-[#db0a0a] via-red-500 to-white drop-shadow-[0_0_20px_rgba(219,10,10,0.5)]">
                            Desiree.
                        </span>
                    </h1>

                    {/* Animated Role Container */}
                    {/* Added gsap-reveal class */}
                    <div className="gsap-reveal flex flex-col sm:flex-row items-center sm:items-baseline justify-center lg:justify-start gap-2 mt-2 sm:mt-4 text-xl sm:text-3xl lg:text-4xl font-semibold w-full">
                        <span className="text-gray-300">I am</span>
                        <div className="relative flex justify-center sm:justify-start sm:pl-2 sm:ml-4">
                            <span className="invisible opacity-0" aria-hidden="true">
                                a Web Developer
                            </span>
                            <span
                                key={currentRoleIndex}
                                className="absolute left-0 sm:left-auto top-0 text-[#db0a0a] drop-shadow-[0_0_10px_rgba(219,10,10,0.8)] animate-[textCycle_4s_ease-in-out_forwards] whitespace-nowrap"
                            >
                                {roles[currentRoleIndex]}
                            </span>
                        </div>
                    </div>

                    {/* Added gsap-reveal class */}
                    <p className="gsap-reveal text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg lg:max-w-2xl mt-6 mb-8 lg:mt-8 lg:mb-10 px-2 lg:px-0">
                        A driven leader with a curious mind for the ever-evolving world of technology and innovation.
                        I blend logical problem-solving with creative expression, exploring the intersection of
                          computing and the arts.
                    </p>

                    {/* Buttons & Socials Area */}
                    {/* Added gsap-reveal class */}
                    <div className="gsap-reveal flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full justify-center lg:justify-start">
                        <a
                            href="#readMore"
                            onClick={(e) => {
                                e.preventDefault();
                                const target = document.querySelector('#about');
                                if (target) target.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="group relative inline-flex items-center justify-center gap-2 px-8 py-3 sm:py-4 w-full sm:w-auto bg-[#db0a0a] text-black font-bold text-base sm:text-lg rounded-full overflow-hidden transition-all duration-300 
                            hover:scale-105 hover:shadow-[0_0_40px_rgba(219,10,10,0.6)] hover:ring-2 hover:ring-white hover:ring-offset-2 hover:ring-offset-black"
                        >
                            <span className="relative z-10 transition-transform duration-300 group-hover:-translate-x-1">Read More</span>
                            <svg className="relative z-10 w-0 overflow-hidden opacity-0 transition-all duration-300 ease-out group-hover:w-5 group-hover:opacity-100 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 z-0"></div>
                        </a>

                        <div className="flex gap-4">
                            <a href="https://www.linkedin.com/in/desireesoronio/" target="_blank" rel="noopener noreferrer" className="relative overflow-hidden group w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-700 flex items-center justify-center text-[#db0a0a] hover:bg-[#db0a0a] hover:text-black hover:border-[#db0a0a] transition-all duration-300 hover:shadow-[0_0_20px_#db0a0a]">
                                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 z-0"></div>
                                <svg className="relative z-10" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </a>
                            <a href="https://github.com/mibiji224" target="_blank" rel="noopener noreferrer" className="relative overflow-hidden group w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-700 flex items-center justify-center text-[#db0a0a] hover:bg-[#db0a0a] hover:text-black hover:border-[#db0a0a] transition-all duration-300 hover:shadow-[0_0_20px_#db0a0a]">
                                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 z-0"></div>
                                <svg className="relative z-10" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* --- RIGHT: IMAGE --- */}
                {/* Added gsap-image-reveal class to the container */}
                <div className="gsap-image-reveal flex-1 flex justify-center lg:justify-end relative group lg:-translate-x-10 mt-10 lg:mt-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-[350px] sm:h-[350px] bg-[#db0a0a] blur-[60px] lg:blur-[80px] rounded-full opacity-0 group-hover:opacity-50 transition-all duration-700 ease-in-out"></div>
                    
                    {/* The Float Animation is INSIDE the GSAP container, so they don't fight */}
                    <div className="relative z-10 animate-[float_6s_ease-in-out_infinite]">
                        <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[350px] lg:h-[350px] rounded-full p-2 border-2 border-[#db0a0a]/30 bg-[#080707] transition-all duration-500 group-hover:border-[#db0a0a] group-hover:scale-105">
                            <img
                                src="/src/assets/mbj.jpg"
                                alt="Desiree"
                                className="w-full h-full object-cover rounded-full shadow-[0_0_15px_rgba(219,10,10,0.2)] group-hover:shadow-[0_0_50px_#db0a0a] transition-all duration-500"
                            />
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
}

export default Home;