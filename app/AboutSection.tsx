"use client"
import React from 'react'

export default function AboutSection() {
  const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, sectionId: React.SetStateAction<string>) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section)
      section.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-white">
        About Us
      </h2>
      <p className="text-lg text-gray-300 mb-8 text-center">
        We are a team of passionate designers and developers dedicated to creating
        innovative and effective solutions for small businesses. Our goal is to
        help you stand out in a crowded market and attract more customers through
        stunning websites and effective lead generation strategies.
      </p>
      <div className="flex justify-center">
        <a
          onClick={(event) => scrollToSection(event, 'contact')}
          className="bg-white text-black font-bold py-2 px-4 cursor-pointer rounded-full hover:bg-gray-200 transition-colors duration-300"
        >
          Get in Touch
        </a>
      </div>
    </div>
  )
}