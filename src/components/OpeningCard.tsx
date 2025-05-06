import { useState, useEffect } from 'react';
// import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { coupleInfo } from '../data/weddingData';
// import { Telescope as Envelope } from 'lucide-react';
// import { format } from 'date-fns';

interface OpeningCardProps {
  onOpen: () => void;
  guestName: string;
}

const OpeningCard = ({ onOpen, guestName }: OpeningCardProps) => {
  const [isOpening, setIsOpening] = useState(false);
  // const [searchParams] = useSearchParams();
  // const guestName = searchParams.get('to') || 'Tamu Undangan';

  const handleOpen = () => {
    setIsOpening(true);
    setTimeout(() => {
      onOpen();
    }, 1500);
  };

  useEffect(() => {
    // Prevent scrolling when card is showing
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 flex items-center justify-center bg-neutral-950 z-50 p-4"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-ornament-pattern opacity-5"></div>
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary-500/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary-500/20 to-transparent"></div>
        </div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-lg relative z-10 ${isOpening ? 'pointer-events-none' : ''
            }`}
        >
          <motion.div
            animate={isOpening ? { y: '-100%' } : { y: 0 }}
            transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="bg-gradient-to-r from-primary-600 to-primary-700  h-72 flex flex-col items-center justify-center text-white p-8"
          >
            <div className="font-arabic text-xl opacity-80 mb-2">بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</div>
            <h3 className="font-sans text-sm uppercase tracking-widest mb-2 opacity-90">Wedding Invitation</h3>
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-4 text-center">
              {coupleInfo.groom.name.split(' ')[0]} & {coupleInfo.bride.name.split(' ')[0]}
            </h1>
            <p className="text-primary-100 text-center">
              Kamis, 15 Mei 2025
            </p>
          </motion.div>

          <motion.div
            animate={isOpening ? { y: '-100%' } : { y: 0 }}
            transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="p-8 text-center"
          >
            <h2 className="text-neutral-800 font-medium mb-4">
              Assalamu Alaikum Warahmatullahi Wabarakatuh
            </h2>
            <p className="text-neutral-600 ">
              Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i
            </p>
            <h3 className='text-lg font-bold my-3'>{guestName}</h3>
            {/* <h3 className='text-lg font-bold my-3'>Tamu Undangan</h3> */}
            <p className="text-neutral-600 mb-8">
              Untuk menghadiri acara pernikahan kami
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleOpen}
              className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium flex items-center justify-center gap-2 mx-auto transition-colors"
            >
              {/* <Envelope size={20} /> */}
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
                className="lucide lucide-mail-open-icon lucide-mail-open"
              >
                <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
              </svg>

              <span>Buka Undangan</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default OpeningCard;