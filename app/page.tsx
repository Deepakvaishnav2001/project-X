"use client";
import { useRef, useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { VideoBackground } from "./components/VideoBackground";
import HomeSection from "./components/HomeSection";
import ContactSection from "./components/ContactSection";
import AboutSection from "./components/AboutSection";
import ProgressBar from "./components/ProgressBar";
import Services1Section from "./components/Services1Section";
import Footer from "./components/Footer";

export default function Home() {
    const scrollContainerRef = useRef(null);
    const [showNavbar, setShowNavbar] = useState(true);

    useEffect(() => {
        const handleScroll = () => {

            const scrollTop = scrollContainerRef.current?.scrollTop;
            const homeSection = document.getElementById("home");
            const contactSection = document.getElementById("contact");

            if (
                scrollTop >= homeSection?.offsetTop &&
                scrollTop < contactSection?.offsetTop
            ) {
                setShowNavbar(true);
            } else if (scrollTop >= contactSection?.offsetTop) {
                setShowNavbar(false);
            }
        };
        if (scrollContainerRef.current) {
            const scrollContainer = scrollContainerRef.current;
            scrollContainer.addEventListener("scroll", handleScroll);

            return () => {
                scrollContainer.removeEventListener("scroll", handleScroll);
            };
        }
    }, []);

    return (
        <div className="relative">
            {showNavbar && (
                <VideoBackground />
            )}
            {showNavbar && (
                <div className="sticky z-20">
                    <Navbar
                        scrollContainerRef={scrollContainerRef}
                        setShowNavbar={setShowNavbar}
                    />
                </div>
            )}
            <div id="__next" className="relative z-10" ref={scrollContainerRef}>
                <ProgressBar scrollContainerRef={scrollContainerRef} />
                <section id="home" className="bg-transparent">
                    <HomeSection scrollContainerRef={scrollContainerRef} />
                </section>
                <section id="services" style={{ background: '#fff4fa' }}>
                    <Services1Section />
                </section>
                <section id="about" style={{ background: '#fff4fa' }}>
                    <AboutSection />
                </section>
                <section id="contact" className="bg-black h-screen flex flex-col justify-center items-center px-4">
                    < ContactSection />
                    < Footer />
                </section>
            </div>
        </div>
    );
}
