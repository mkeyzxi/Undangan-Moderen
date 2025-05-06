// import React from 'react';
// import { Clock, Heart, MapPin } from 'lucide-react';
// import { Heart } from 'lucide-react';
import { eventDetails } from '../data/weddingData';
import { format } from 'date-fns';

const Footer = () => {
  const eventDate = new Date(eventDetails.date);
  const formattedDate = format(eventDate, 'dd MMMM yyyy');

  return (
    <footer className="bg-neutral-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-12">
          <div className="md:w-1/3">
            <h3 className="font-display text-2xl mb-4">Zandi & Suci</h3>
            <p className="text-neutral-400 mb-6">
              Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Sdr.(i)
              berkenan hadir untuk memberikan doa restu kepada kedua mempelai.
            </p>
            <div className="flex items-center gap-2 text-primary-400">
              {/* <Heart size={20} className="text-primary-500" /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-heart-icon lucide-heart text-primary-500"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>

              <span>15.05.2025</span>
            </div>
          </div>

          <div className="md:w-1/3">
            <h3 className="font-display text-2xl mb-4">Wedding Info</h3>
            <ul className="space-y-4 text-neutral-400">
              <li className="flex items-start gap-3">
                <CalendarIcon className="text-primary-500 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-medium">Tanggal</span>
                  <span>{formattedDate}</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <ClockIcon className="text-primary-500 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-medium">Waktu</span>
                  <span>{eventDetails.time}</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPinIcon className="text-primary-500 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-medium">Lokasi</span>
                  <span>{eventDetails.venue}, {eventDetails.location}</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="md:w-1/3">
            <h3 className="font-display text-2xl mb-4">Ucapan</h3>
            <p className="text-neutral-400 mb-6">
              "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri,
              supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang."
            </p>
            <p className="text-primary-400 font-medium">(QS. Ar-Rum: 21)</p>
          </div>
        </div>

        {/* <div className="border-t border-neutral-800 pt-8 text-center text-sm text-neutral-500">
          <p>&copy; 2025 Zandi & Suci Wedding. All rights reserved.</p>
        </div> */}
        <div className="border-t border-neutral-800 pt-8 text-center text-sm text-neutral-500 gap-4 flex flex-col items-center">
         <div className="">
         <p>&copy; 2025 Zandi & Suci Wedding. All rights reserved.</p>
          <p className="mt-2">
            Developed by <span className="text-white font-medium">Muhammad Makbul N (mkeyzxi)</span>
          </p>
         </div>
         <div className="">
         <a
            href="https://sosmed-mbul.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-4 py-1 border border-primary-500 text-primary-400 rounded-full hover:bg-primary-500 hover:text-white transition"
          >
            Kontak & Pemesanan
          </a>
         </div>
        </div>
      </div>
    </footer>
  );
};

// Icon components 
const CalendarIcon = ({ className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
    <line x1="16" x2="16" y1="2" y2="6"></line>
    <line x1="8" x2="8" y1="2" y2="6"></line>
    <line x1="3" x2="21" y1="10" y2="10"></line>
  </svg>
);

const ClockIcon = ({ className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const MapPinIcon = ({ className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

export default Footer;