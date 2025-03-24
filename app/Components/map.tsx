import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';

const LocationSection = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
            <div className="max-w-4xl w-full relative">
                {/* Header Section */}
                <div className="mb-2">
                    <h2 className="text-4xl font-bold text-gray-800">Our Location</h2>
                    <h1 className="text-5xl font-bold text-gray-900">Connecting Near and Far</h1>
                </div>

                {/* Map Container */}
                <div className="relative w-full bg-white rounded-lg overflow-hidden shadow-lg h-96">
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
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                        </div>
                    </div>

                    {/* Location Card */}
                    <div className="absolute top-10 left-10 z-10">
                        <div className="bg-white rounded-lg shadow-lg p-4 w-64">
                            <div className="flex items-center mb-2">
                                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-2">
                                    <MapPin size={18} color="white" />
                                </div>
                                <h3 className="font-bold text-lg">Snappy Inc.</h3>
                            </div>
                            <p className="text-sm font-medium text-gray-700 mb-1">Great Teams Unite Together</p>
                            <p className="text-sm text-gray-600 mb-1">San Francisco, USA</p>
                            <p className="text-sm text-gray-600 mb-3">123 Tech Boulevard, Suite 456</p>

                            <a href="#" className="flex items-center text-sm text-blue-500 font-medium">
                                <span>Open Google Maps</span>
                                <ExternalLink size={14} className="ml-1" />
                            </a>
                        </div>
                    </div>

                    {/* Branding Card */}
                    <div className="absolute bottom-10 right-10 z-10 px-6 bg-white">
                        <img src="Ace logo.jpg" alt="" width={100} height={100} />
                    </div>
                </div>


            </div>
        </div>
    );
};

export default LocationSection;