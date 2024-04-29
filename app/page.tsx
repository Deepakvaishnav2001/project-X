"use client"
import { useRef } from "react"
import Navbar from "./components/Navbar"
import { VideoBackground } from "./components/VideoBackground"
import HomeSection from "./components/HomeSection"
import ContactForm from "./components/ContactSection"
import AboutSection from "./components/AboutSection"
import ProgressBar from './components/ProgressBar';
import Services1Section from "./components/Services1Section"

export default function Home() {

    const scrollContainerRef = useRef(null);

    return (
        <div className="relative">
            <VideoBackground />
            <Navbar scrollContainerRef={scrollContainerRef} />
            <ProgressBar scrollContainerRef={scrollContainerRef} />
            <div id="__next" className="relative z-10" ref={scrollContainerRef}>
                <section id="home" className="bg-black/40">
                    < HomeSection />
                </section>
                <section id="services" className="bg-black/40">
                   < Services1Section />
                </section>
                <section id="about" className="bg-black/20">
                    <AboutSection />
                </section>
                <section className="py-20 bg-black/60" id="contact">< ContactForm /></section>
                
            </div>
        </div>
    )
}
