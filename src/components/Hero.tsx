import  { useEffect } from 'react';
import { motion } from 'framer-motion';
import { coupleInfo } from '../data/weddingData';
// import { CalendarDays } from 'lucide-react';

const Hero = () => {
  // Parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
      const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
      
      const elements = document.querySelectorAll('.parallax');
      elements.forEach((element) => {
        const htmlElement = element as HTMLElement;
        const speed = parseFloat(htmlElement.getAttribute('data-speed') || '0');
        htmlElement.style.transform = `translate(${moveX * speed}px, ${moveY * speed}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] },
    },
  };

  return (
    <div
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-950 text-white"
    >
      {/* Background overlay with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 to-neutral-950/60 z-10"></div>
      
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/galery/galery1.webp"
          alt="Wedding background"
          className="w-full h-full object-cover "
        />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 parallax" data-speed="4">
        <div className="w-32 h-32 rounded-full bg-primary-400/20 blur-xl"></div>
      </div>
      <div className="absolute bottom-20 right-40 parallax" data-speed="6">
        <div className="w-40 h-40 rounded-full bg-secondary-400/20 blur-xl"></div>
      </div>
      
      {/* Content */}
      <motion.div
        className="container mx-auto px-4 text-center z-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-4">
          <p className="font-arabic text-2xl opacity-90">بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</p>
        </motion.div>
        
        <motion.div variants={itemVariants} className="mb-3">
          <p className="text-lg font-light tracking-wider text-primary-100">WEDDING INVITATION</p>
        </motion.div>
        
        <motion.h1 
          variants={itemVariants}
          className="font-display text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight text-white mb-8 drop-shadow-lg"
        >
          {coupleInfo.groom.name.split(' ')[0]} 
          <span className="inline-block mx-4 text-secondary-400">&</span> 
          {coupleInfo.bride.name.split(' ')[0]}
        </motion.h1>
        
        <motion.div variants={itemVariants} className="mb-8">
          <p className="text-lg md:text-xl opacity-90 font-light max-w-2xl mx-auto">
            Assalamu Alaikum Warahmatullahi Wabarakatuh
            <br />
            <span className="block mt-2">
              Dengan memohon Rahmat dan Ridho Allah SWT, kami bermaksud menyelenggarakan 
              Resepsi pernikahan putra-putri kami
            </span>
          </p>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <div className="inline-block rounded-full bg-gradient-to-r from-primary-500 to-primary-700 p-[2px] shadow-xl">
            <a
              href="#event"
              className="flex items-center gap-2 rounded-full bg-neutral-950/90 px-5 py-3 hover:bg-transparent transition-all"
            >
              {/* <CalendarDays size={20} className="text-primary-400" /> */}
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
  className="lucide lucide-calendar-days-icon lucide-calendar-days"
>
  <path d="M8 2v4" />
  <path d="M16 2v4" />
  <rect width="18" height="18" x="3" y="4" rx="2" />
  <path d="M3 10h18" />
  <path d="M8 14h.01" />
  <path d="M12 14h.01" />
  <path d="M16 14h.01" />
  <path d="M8 18h.01" />
  <path d="M12 18h.01" />
  <path d="M16 18h.01" />
</svg>

              <span className="font-medium">15 Mei 2025</span>
            </a>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-0 text-primary-400 right-0 h-20 bg-gradient-to-t from-neutral-950 to-transparent z-10"></div>
    </div>
  );
};

export default Hero;