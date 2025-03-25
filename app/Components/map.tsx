import React from 'react';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';
import { Figtree } from 'next/font/google';
import Image from 'next/image';
const figtree = Figtree({
    subsets: ['latin']
});

const LocationSection = () => {
    return (
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen flex items-center justify-center p-6 md:p-10">
            <div className="mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Map Visualization */}
                <div className="relative w-full bg-white rounded-2xl shadow-2xl overflow-hidden h-[500px]">
                    {/* Map Background with SVG Pattern */}
                    <div className="absolute inset-0 bg-gray-100">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e5e7eb" strokeWidth="0.5" />
                                </pattern>

                                <pattern id="smallGrid" width="8" height="8" patternUnits="userSpaceOnUse">
                                    <path d="M 8 0 L 0 0 0 8" fill="none" stroke="#f3f4f6" strokeWidth="0.25" />
                                </pattern>
                            </defs>

                            <rect width="100%" height="100%" fill="url(#smallGrid)" />
                            <rect width="100%" height="100%" fill="url(#grid)" />

                            {/* Main "roads" */}
                            <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#d1d5db" strokeWidth="3" />
                            <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#d1d5db" strokeWidth="3" />

                            {/* Secondary "roads" */}
                            <line x1="25%" y1="0" x2="25%" y2="100%" stroke="#e5e7eb" strokeWidth="2" />
                            <line x1="75%" y1="0" x2="75%" y2="100%" stroke="#e5e7eb" strokeWidth="2" />
                            <line x1="0" y1="25%" x2="100%" y2="25%" stroke="#e5e7eb" strokeWidth="2" />
                            <line x1="0" y1="75%" x2="100%" y2="75%" stroke="#e5e7eb" strokeWidth="2" />

                            {/* Terrain features - like water */}
                            <rect x="60%" y="60%" width="40%" height="40%" fill="#bfdbfe" fillOpacity="0.3" />
                            <path d="M 0 80% Q 25% 70%, 50% 85%, 75% 75%, 100% 90%" fill="none" stroke="#93c5fd" strokeWidth="2" />
                        </svg>
                    </div>

                    {/* Location Marker */}
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                        </div>
                    </div>

                    {/* Location Card */}
                    <div className="absolute top-10 left-10 z-10">
                        <div className="bg-white rounded-lg shadow-lg p-4 w-64">
                            <div className="flex items-center mb-2">
                                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-2">
                                    <MapPin size={18} color="white" />
                                </div>
                                <h3 className="font-bold text-lg">A.C.E Inc.</h3>
                            </div>
                            <p className="text-sm font-medium text-gray-700 mb-1">Great Teams Unite Together</p>
                            <p className="text-sm text-gray-600 mb-1">London, UK</p>
                            <p className="text-sm text-gray-600 mb-3">124 City Road, London, EC1V 2NX

</p>

                            <a href="#" className="flex items-center text-sm text-green-500 font-medium">
                                <span>Open Google Maps</span>
                                <ExternalLink size={14} className="ml-1" />
                            </a>
                        </div>
                    </div>

                    {/* Branding Card */}
                    <div className="absolute bottom-10 right-10 z-10 px-6 bg-white">
                        <Image src="/Ace logo.jpg" alt="" width={100} height={100} />
                    </div>
                </div>

                {/* Content Section */}
                <div className="space-y-6">
                    <div>
                        <p className="text-green-600 font-medium uppercase tracking-wider mb-3">Our Headquarters</p>
                        <h1 className={`${figtree.className} max-md:text-3xl text-5xl font-bold text-gray-900 leading-tight`}>
                            Connecting Near and Far
                        </h1>
                        <p className="text-xl text-gray-600 mt-4 max-md:text-sm">
                            Bridging distances with innovative solutions <br className='md:hidden' /> and global connectivity.
                        </p>
                    </div>

                    {/* Contact Details */}
                    <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-100">
                        <div className="space-y-4">
                            <div className="flex items-center space-x-4">
                                <div className="bg-green-100 p-3 rounded-full">
                                    <MapPin className="text-green-600" size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-800">Location</h3>
                                    <p className="text-gray-600">124 City Road, London, EC1V 2NX</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="bg-blue-100 p-3 rounded-full">
                                    <Phone className="text-blue-600" size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-800">Phone</h3>
                                    <p className="text-gray-600">+44 20 1234 5678</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="bg-purple-100 p-3 rounded-full">
                                    <Mail className="text-purple-600" size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-800">Email</h3>
                                    <p className="text-gray-600">contact@aceinc.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Google Maps Link */}
                    <a 
                        href="#" 
                        className="inline-flex items-center text-green-600 hover:text-green-800 transition-colors duration-300"
                    >
                        <ExternalLink className="mr-2" size={18} />
                        Open in Google Maps
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LocationSection;