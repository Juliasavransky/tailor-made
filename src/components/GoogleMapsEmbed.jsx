import React from 'react';

const GoogleMapsEmbed = () => {
  const address = "3, Rue Ferdinand Raynaud, 63360 Gerzat, France";
  
  // יצירת URL מקודד לגוגל מפות
  const encodedAddress = encodeURIComponent(address);
const simpleMapUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed&hl=fr&gl=FR&region=FR`;
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
 

      {/* מפה */}
      <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
        <iframe
          src={simpleMapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title=" Google Maps Location"
          className="w-full h-full"
        />
      </div>
      
      {/* כפתור לפתיחה בגוגל מפות */}
      <div className="mt-4 text-center">
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          Open in Google Maps
        </a>
      </div>
    </div>
  );
};

export default GoogleMapsEmbed;