// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// // import { Heart } from 'lucide-react';

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <motion.header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled
//           ? 'bg-neutral-950/80 backdrop-blur-md shadow-md py-3'
//           : 'bg-transparent py-4'
//       }`}
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="container mx-auto px-4 flex justify-between items-center">
//         <div className="text-white font-display">
//           <span className={`transition-all duration-300 ${isScrolled ? 'text-lg' : 'text-xl'}`}>
//             Zandi & Suci
//           </span>
//         </div>
//         {/* <nav className='hidden  md:block'> */}
//         <nav >
//           <ul className="flex space-x-6 text-white font-light">
//             <li className="hover:text-primary-300 transition-colors">
//               <a href="#home" className="text-sm uppercase tracking-wide">Home</a>
//             </li>
//             <li className="hover:text-primary-300 transition-colors">
//               <a href="#couple" className="text-sm uppercase tracking-wide">Couple</a>
//             </li>
//             <li className="hover:text-primary-300 transition-colors">
//               <a href="#event" className="text-sm uppercase tracking-wide">Event</a>
//             </li>
//             <li className="hover:text-primary-300 transition-colors">
//               <a href="#gallery" className="text-sm uppercase tracking-wide">Gallery</a>
//             </li>
//             <li className="hover:text-primary-300 transition-colors">
//               <a href="#rsvp" className="text-sm uppercase tracking-wide">RSVP</a>
//             </li>
//           </ul>
//         </nav>
//         <div className="md:block hidden">
//           <a
//             href="#rsvp"
//             className="flex items-center gap-1 text-white bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-full text-sm transition-all"
//           >
//             {/* <Heart size={16} className="text-white" /> */}
//             <svg
//   xmlns="http://www.w3.org/2000/svg"
//   width="20"
//   height="20"
//   viewBox="0 0 24 24"
//   fill="none"
//   stroke="currentColor"
//   strokeWidth="2"
//   strokeLinecap="round"
//   strokeLinejoin="round"
//   className="lucide lucide-heart-icon lucide-heart text-white"
// >
//   <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
// </svg>

//             <span>Attend</span>
//           </a>
//         </div>
//       </div>
      

   
//     </motion.header>
//   );
// };

// export default Header;

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-neutral-950/80 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-4'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-white font-display">
          <span className={`transition-all duration-300 ${isScrolled ? 'text-lg' : 'text-xl'}`}>
            Zandi & Suci
          </span>
        </div>

        {/* Toggle button for mobile */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {/* ☰ */}
          {isMobileMenuOpen ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x transition"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu-icon lucide-menu transition"><path d="M4 12h16"/><path d="M4 18h16"/><path d="M4 6h16"/></svg> }
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 text-white font-light">
            <li className="hover:text-primary-300 transition-colors">
              <a href="#home" className="text-sm uppercase tracking-wide">Home</a>
            </li>
            <li className="hover:text-primary-300 transition-colors">
              <a href="#couple" className="text-sm uppercase tracking-wide">Couple</a>
            </li>
            <li className="hover:text-primary-300 transition-colors">
              <a href="#event" className="text-sm uppercase tracking-wide">Event</a>
            </li>
            <li className="hover:text-primary-300 transition-colors">
              <a href="#gallery" className="text-sm uppercase tracking-wide">Gallery</a>
            </li>
            <li className="hover:text-primary-300 transition-colors">
              <a href="#rsvp" className="text-sm uppercase tracking-wide">RSVP</a>
            </li>
          </ul>
        </nav>

        {/* Attend Button - Desktop only */}
        <div className="hidden md:block">
          <a
            href="#rsvp"
            className="flex items-center gap-1 text-white bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-full text-sm transition-all"
          >
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
              className="lucide lucide-heart-icon lucide-heart text-white"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
            <span>Attend</span>
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-neutral-900 text-white px-8 py-5 space-y-2 flex flex-col gap-5 backdrop-blur">
          <a href="#home" className="block text-sm uppercase tracking-wide">Home</a>
          <a href="#couple" className="block text-sm uppercase tracking-wide">Couple</a>
          <a href="#event" className="block text-sm uppercase tracking-wide">Event</a>
          <a href="#gallery" className="block text-sm uppercase tracking-wide">Gallery</a>
          <a href="#rsvp" className="block text-sm uppercase tracking-wide">RSVP</a>
          <a
            href="#rsvp"
            className="mt-2 inline-flex items-center gap-1 bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-full text-sm transition-all"
          >
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
              className="lucide lucide-heart-icon lucide-heart text-white"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
            <span>Attend</span>
          </a>
        </div>
      )}
    </motion.header>
  );
};

export default Header;
