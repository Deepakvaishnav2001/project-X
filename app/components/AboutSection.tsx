"use client"
import React from 'react';
import scrollToSection from '../hooks/useScrollToSection';

export default function AboutSection() {

  return (
    <>
      <div className='about-us'>
        <div className='about-top'>
          <div className='about-top-left'>
            <div className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</div>
            <p className=''>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
            <p className=''>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
          <div className='about-top-right'><img src="images/banner-right-image.png" alt="about-us" /></div>
        </div>
        <div className='about-bottom'>
          <div className='about-bottom-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</div>
          <div className='about-bottom-right'>
            <p className=''>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
          </div>
        </div>
      </div>
    </>
  )
}
