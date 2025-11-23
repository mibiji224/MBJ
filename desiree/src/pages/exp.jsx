import React from 'react';

function Exp() {
    return (
        <section className="bg-black min-h-screen p-10 font-sans" id="readMore">
            {/* Main Container */}
            <div className="max-w-4xl mx-auto">
                
                <ol className="relative border-l-2 border-neutral-800 space-y-20 my-10">

                    {/* ITEM 1 */}
                    <li className="relative ml-12">
                        {/* Timeline Dot */}
                        <span className="absolute flex items-center justify-center w-12 h-12 -left-[3.1rem] bg-black rounded-full border-2 border-red-600 shadow-[0_0_10px_rgba(220,38,38,0.5)]">
                            <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z" />
                            </svg>
                        </span>

                        {/* Date */}
                        <time className="block mb-3 text-lg font-mono font-medium leading-none text-red-500 uppercase tracking-wider">
                            March 13th, 2025
                        </time>

                        {/* Heading */}
                        <h3 className="flex items-center mb-4 text-4xl font-bold text-white">
                            Flowbite Application UI v2.0.0
                            <span className="ml-4 bg-red-600 text-white text-sm font-medium px-3 py-1 rounded-full tracking-wide shadow-lg shadow-red-900/50">
                                LATEST
                            </span>
                        </h3>

                        {/* Description */}
                        <p className="mb-6 text-xl font-normal text-neutral-400 max-w-[90%] leading-relaxed">
                            Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar,
                            and pre-order E-commerce & Marketing pages.
                        </p>

                        {/* Action Button */}
                        <a href="#"
                            className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-transparent border border-neutral-600 rounded-lg hover:border-red-600 hover:text-red-500 hover:bg-neutral-900 transition-all duration-300 ease-in-out group">
                            <svg className="w-5 h-5 mr-3 text-neutral-400 group-hover:text-red-500 transition-colors" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2"
                                    d="M10 3v4a1 1 0 0 1-1 1H5m14-4v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Zm-4 1h.01v.01H15V5Zm-2 2h.01v.01H13V7Zm2 2h.01v.01H15V9Zm-2 2h.01v.01H13V11Zm2 2h.01v.01H15V13Zm-2 2h.01v.01H13V15Zm2 2h.01v.01H15V17Zm-2 2h.01v.01H13V19Z" />
                            </svg>
                            Download ZIP
                        </a>
                    </li>

                    {/* ITEM 2 */}
                    <li className="relative ml-12">
                        <span className="absolute flex items-center justify-center w-12 h-12 -left-[3.1rem] bg-black rounded-full border-2 border-neutral-700 hover:border-red-500 transition-colors duration-300">
                             <svg className="w-6 h-6 text-neutral-400" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z" />
                            </svg>
                        </span>

                        <time className="block mb-3 text-lg font-mono font-medium leading-none text-neutral-500 uppercase tracking-wider">
                            January 09th, 2025
                        </time>

                        <h3 className="text-4xl font-bold text-white mb-4">
                            Flowbite Figma v1.3.0
                        </h3>

                        <p className="text-xl font-normal text-neutral-400 max-w-[90%] leading-relaxed">
                            All of the pages and components are first designed in Figma and we keep a parity between
                            the two versions even as we update the project.
                        </p>
                    </li>

                    {/* ITEM 3 */}
                    <li className="relative ml-12">
                        <span className="absolute flex items-center justify-center w-12 h-12 -left-[3.1rem] bg-black rounded-full border-2 border-neutral-700 hover:border-red-500 transition-colors duration-300">
                             <svg className="w-6 h-6 text-neutral-400" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z" />
                            </svg>
                        </span>

                        <time className="block mb-3 text-lg font-mono font-medium leading-none text-neutral-500 uppercase tracking-wider">
                            October 14th, 2024
                        </time>

                        <h3 className="text-4xl font-bold text-white mb-4">
                            Flowbite Library v1.2.2
                        </h3>

                        <p className="text-xl font-normal text-neutral-400 max-w-[90%] leading-relaxed">
                            Get started with dozens of web components and interactive elements built on top of
                            Tailwind CSS.
                        </p>
                    </li>

                </ol>
            </div>
        </section>
    );
}

export default Exp;