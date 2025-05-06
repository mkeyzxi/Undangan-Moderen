// import React from 'react';
// import { motion } from 'framer-motion';
// import { CalendarDays, Clock, MapPin } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { eventDetails } from '../data/weddingData';
import { format } from 'date-fns';

const EventDetails = () => {
  const eventDate = new Date(eventDetails.date);
  const formattedDate = format(eventDate, 'EEEE, dd MMMM yyyy');

  return (
    <section id="event" className="py-24 relative overflow-hidden bg-neutral-950 text-white">
      {/* Background ornaments */}
      <div className="absolute right-0 top-0 h-full w-1/4 md:w-1/3 opacity-20 bg-ornament-pattern bg-repeat"></div>
      <div className="absolute left-0 top-0 h-full w-1/4 md:w-1/3 opacity-20 bg-ornament-pattern bg-repeat"></div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
            Wedding Event
          </h2>
          <p className="max-w-2xl mx-auto text-neutral-300">
            Kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami
          </p>
          <div className="w-20 h-1 bg-primary-500 mx-auto mt-6"></div>
        </AnimatedSection>

        <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
          <AnimatedSection
            className="flex-1 bg-gradient-to-br from-primary-900/40 to-primary-800/60 p-8 rounded-xl border border-primary-700/30 shadow-xl"
            delay={0.1}
          >
            <div className="w-16 h-16 rounded-full bg-primary-600/20 flex items-center justify-center mx-auto mb-6">
              {/* <CalendarDays size={32} className="text-primary-400" /> */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-days-icon lucide-calendar-days"><path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" /></svg>
            </div>
            <h3 className="text-2xl font-display text-center mb-2">Akad & Resepsi</h3>
            <div className="w-10 h-0.5 bg-primary-500 mx-auto mb-4"></div>
            <p className="text-center text-neutral-200 mb-4">
              {formattedDate}
            </p>

            <div className="flex items-center justify-center gap-2 text-primary-300 mb-2">
              {/* <Clock size={18} /> */}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock-icon lucide-clock"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span>Waktu Akad</span>
            </div>
            <p className="text-center mb-4 text-white">11.00 WITA</p>

            <div className="flex items-center justify-center gap-2 text-primary-300 mb-2">
              {/* <Clock size={18} /> */}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock-icon lucide-clock"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span>Waktu Resepsi</span>
            </div>
            <p className="text-center text-white">19.30 WITA - Selesai</p>
          </AnimatedSection>

          <AnimatedSection
            className="flex-1 bg-gradient-to-br from-secondary-900/40 to-secondary-800/60 p-8 rounded-xl border border-secondary-700/30 shadow-xl"
            delay={0.2}
          >
            <div className="w-16 h-16 rounded-full bg-secondary-600/20 flex items-center justify-center mx-auto mb-6">
              {/* <MapPin size={32} className="text-secondary-400" /> */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin-icon lucide-map-pin text-secondary-400"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <h3 className="text-2xl font-display text-center mb-2">Lokasi</h3>
            <div className="w-10 h-0.5 bg-secondary-500 mx-auto mb-4"></div>
            <p className="text-center text-neutral-200 mb-6">
              {eventDetails.venue}
              <br />
              {eventDetails.location}
            </p>

            <div className="w-full h-40 bg-neutral-800 rounded-lg overflow-hidden mb-4">
              {/* This would be replaced with an actual map component */}
              <div className="w-full h-full flex items-center justify-center text-neutral-400">
                {/* <p>Peta Lokasi</p> */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15941.909282467801!2d118.8832604885101!3d-2.672977690195177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d92d9a955f911d5%3A0x96b957531c4deeb6!2sKantor%20Kelurahan%20Mamunyu!5e0!3m2!1sen!2sid!4v1746499821037!5m2!1sen!2sid"
                  width="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div className="text-center">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${eventDetails.coordinates.lat},${eventDetails.coordinates.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 bg-secondary-600 hover:bg-secondary-700 text-white rounded-lg transition-colors"
              >
                Lihat Google Maps
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;