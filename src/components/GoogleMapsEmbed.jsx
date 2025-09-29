import React from 'react';



const GoogleMapsEmbed= ({
  address = '3, Rue Fernand Raynaud, 63360 Gerzat, France',
  className = '',
}) => {
  const encodedAddress = encodeURIComponent(address);
  const simpleMapUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed&hl=fr&gl=FR&region=FR`;

  return (
    <div className={`w-full ${className}`}>
      {/* Map */}
      <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-lg">
        <iframe
          src={simpleMapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps Location"
          className="w-full h-full"
        />
      </div>

      
      <div className="mt-4">
        <button
          onClick={() =>
            window.open(
              `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`,
              '_blank'
            )
          }
          className="btn-hero w-full bg-gradient-to-r from-primary to-accent text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-[var(--shadow-elegant)] hover:scale-105 active:scale-95 group"
        >
          Ouvrir dans Google Maps
        </button>
      </div>
    </div>
  );
};

export default GoogleMapsEmbed;
