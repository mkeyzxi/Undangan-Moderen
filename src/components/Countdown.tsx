import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CountdownValues } from '../types';
import { eventDetails } from '../data/weddingData';

const Countdown = () => {
  const [countdown, setCountdown] = useState<CountdownValues>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date(eventDetails.date);
    
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        setCountdown({ days, hours, minutes, seconds });
      }
    };
    
    // Calculate immediately
    calculateTimeLeft();
    
    // Calculate every second
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <section className="py-16 bg-gradient-to-r from-primary-700 to-primary-900 text-white relative">
      {/* Decorative pattern overlay */}
      <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl md:text-4xl mb-3">Counting Down To The Big Day</h2>
          <p className="text-primary-100 max-w-xl mx-auto">
            Kami menantikan kehadiran Anda pada hari istimewa kami
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {[
            { label: 'Days', value: countdown.days },
            { label: 'Hours', value: countdown.hours },
            { label: 'Minutes', value: countdown.minutes },
            { label: 'Seconds', value: countdown.seconds },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="w-[70px] sm:w-[100px] md:w-[130px] h-[100px] sm:h-[130px] md:h-[160px] bg-white/10 backdrop-blur rounded-lg shadow-lg flex flex-col items-center justify-center border border-white/20"
            >
              <span className="font-display text-3xl md:text-5xl font-bold">
                {String(item.value).padStart(2, '0')}
              </span>
              <span className="text-xs md:text-sm text-primary-100 uppercase tracking-widest mt-2">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Countdown;