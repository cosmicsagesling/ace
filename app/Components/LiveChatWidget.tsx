/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useState } from 'react';
import { MessageCircle, } from 'lucide-react';

const LiveChatWidget: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const openTawkToChat = () => {
    if ((window as any).Tawk_API) {
      (window as any).Tawk_API.maximize();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <button
        onClick={openTawkToChat}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="
          bg-blue-500 text-white p-4 rounded-full 
          shadow-xl hover:bg-blue-600 
          transition-all duration-300 
          flex items-center justify-center
           hover:animate-none
        "
        aria-label="Open Live Chat"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {isHovered && (
        <div 
          className="
            absolute bottom-full right-0 mb-2 
            bg-white text-gray-800 
            p-3 rounded-lg shadow-lg
            text-sm whitespace-nowrap
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300
          "
        >
          Need help? Chat with us!
        </div>
      )}
    </div>
  );
};

export default LiveChatWidget;