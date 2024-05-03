export default function ServicesSection() {

    return (
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
    )
}
