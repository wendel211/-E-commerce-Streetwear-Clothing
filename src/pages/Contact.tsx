import React, { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: 'YOUR_GOOGLE_MAPS_API_KEY', // Replace with your API key
        version: 'weekly',
      });

      const { Map } = await loader.importLibrary('maps');
      
      // Example location (São Paulo)
      const position = { lat: -23.550520, lng: -46.633308 };
      
      if (mapRef.current) {
        new Map(mapRef.current, {
          center: position,
          zoom: 15,
          styles: [
            {
              "elementType": "geometry",
              "stylers": [{ "color": "#242f3e" }]
            },
            {
              "elementType": "labels.text.stroke",
              "stylers": [{ "color": "#242f3e" }]
            },
            {
              "elementType": "labels.text.fill",
              "stylers": [{ "color": "#746855" }]
            }
          ]
        });
      }
    };

    initMap();
  }, []);

  return (
    <div className="pt-16 bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-6">Get in Touch</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-accent"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent text-white py-3 rounded-md font-semibold hover:bg-opacity-90 transition duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4 text-gray-300">
                <MapPin className="text-accent" />
                <span>123 Fashion Street, São Paulo - SP, Brazil</span>
              </div>
              <div className="flex items-center space-x-4 text-gray-300">
                <Phone className="text-accent" />
                <span>+55 (11) 1234-5678</span>
              </div>
              <div className="flex items-center space-x-4 text-gray-300">
                <Mail className="text-accent" />
                <span>contact@streetwear.com</span>
              </div>
              <div className="flex items-center space-x-4 text-gray-300">
                <Clock className="text-accent" />
                <span>Mon - Sat: 10:00 - 20:00</span>
              </div>
            </div>
          </div>

          <div>
            <div 
              ref={mapRef}
              className="w-full h-[500px] rounded-lg overflow-hidden"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};