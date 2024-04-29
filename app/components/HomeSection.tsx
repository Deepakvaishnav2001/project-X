"use client"
import React from 'react';
import scrollToSection from '../hooks/useScrollToSection';

export default function HomeSection() {

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center">
            <div className="text-center md:text-left mb-8 md:mb-0 md:mr-8">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ textAlign: 'center' }}>
                    Unleash Your Business&apos;s Online Potential
                </h1>
                <p className="text-lg text-gray-300 mb-8" style={{ textAlign: 'center' }}>
                    Our expertise lies in crafting captivating single-page websites that not only enhance your online presence but also drive valuable leads your way. Let us create a digital masterpiece that elevates your brand and leaves a lasting impression on your audience.
                </p>
                <div className="flex justify-center flex-col sm:flex-row">
                    <button onClick={(e) => scrollToSection(e, 'contact')}
                        className="bg-transparent hover:text-black hover:bg-white text-gray-300 py-2 px-4 border border-white-700 rounded mb-4 sm:mb-0 sm:mr-4"
                    >
                        Get Started!
                    </button>
                    <button onClick={(e) => scrollToSection(e, 'services')}
                        className="bg-white text-black hover:bg-blue-400 py-2 px-4 border border-white-700 rounded"
                    >
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    )
}
