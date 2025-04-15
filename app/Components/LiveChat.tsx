/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect } from 'react';

interface TawkToProps {
  propertyId: string;
  widgetId: string;
}

const TawkTo: React.FC<TawkToProps> = ({ propertyId, widgetId }) => {
  useEffect(() => {
    // Tawk.to API initialization
    (window as any).Tawk_API = (window as any).Tawk_API || {};
    (window as any).Tawk_LoadStart = new Date();

    // Create script element
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = `https://embed.tawk.to/${propertyId}/${widgetId}`;
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');

    // Optional: Add onload and onerror handlers
    script.onload = () => {
      console.log('Tawk.to script loaded successfully');
      
      // Optional: Customize Tawk.to API
      if ((window as any).Tawk_API) {
        // Example of setting visitor attributes
        (window as any).Tawk_API.onLoad = () => {
          (window as any).Tawk_API.setAttributes({
          }, (error: any) => {
            if (error) {
              console.error('Error setting attributes:', error);
            }
          });
        };
      }
    };

    script.onerror = () => {
      console.error('Error loading Tawk.to script');
    };

    // Append script to document
    const firstScript = document.getElementsByTagName('script')[0];
    if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript);
    } else {
      document.body.appendChild(script);
    }

    // Cleanup function
    return () => {
      // Remove script and reset Tawk_API
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      delete (window as any).Tawk_API;
      delete (window as any).Tawk_LoadStart;
    };
  }, [propertyId, widgetId]);

  return null;
};

export default TawkTo;