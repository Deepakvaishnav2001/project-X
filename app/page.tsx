import Navbar from "./Navbar"
import { VideoBackground } from "./VideoBackground"
import ContactForm from "./ContactForm"
import AboutSection from "./AboutSection"

export default function Home() {

    return (
        <div className="relative">
            <VideoBackground />
            <Navbar />
            <div id="__next" className="relative z-10">
                <section id="home" className="bg-black/40">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center">
                        <div className="text-center md:text-left mb-8 md:mb-0 md:mr-8">
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                Unleash Your Business&apos;s Online Potential
                            </h1>
                            <p className="text-lg text-gray-300 mb-8">
                                We craft captivating single-page websites that drive leads and elevate
                                your online presence.
                            </p>
                            <form className="flex flex-col md:flex-row items-center justify-center md:justify-start">
                                <input
                                    type="email"
                                    required
                                    placeholder="Enter your email"
                                    className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none"
                                />
                                <button
                                    type="submit"
                                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded-r-md hover:bg-gradient-to-l hover:from-pink-500 hover:to-purple-500 transition-colors duration-300"
                                >
                                    Get Started
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
                <section id="about" className="bg-black/20">
                    <AboutSection />
                </section>
                <section id="services" className="bg-black/40">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold mb-4 text-center text-white">
                            Our Services
                        </h2>
                        <p className="text-lg text-gray-300 text-center mb-8">
                            We offer a wide range of services to meet your business needs.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-4 text-white">
                                        Custom Website Design
                                    </h3>
                                    <p className="text-gray-300">
                                        We create stunning, responsive, and user-friendly websites tailored
                                        to your business needs.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-4 text-white">
                                        Lead Generation
                                    </h3>
                                    <p className="text-gray-300">
                                        Our websites are designed to capture leads and convert them into
                                        customers for your business.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-4 text-white">
                                        Search Engine Optimization
                                    </h3>
                                    <p className="text-gray-300">
                                        We optimize your website for search engines, ensuring maximum
                                        visibility and organic traffic.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                < ContactForm />
            </div>
        </div>
    )
}
