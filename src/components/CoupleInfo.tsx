// import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { coupleInfo } from '../data/weddingData';

const CoupleInfo = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section 
      id="couple" 
      className="py-24 bg-neutral-50 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-primary-100 opacity-40"></div>
      <div className="absolute -bottom-24 -left-20 w-80 h-80 rounded-full bg-secondary-100 opacity-30"></div>
      
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-neutral-900 mb-4">
            The Couple
          </h2>
          <p className="max-w-2xl mx-auto text-neutral-600">
            Dengan Rahmat Allah SWT, kami mengundang Bapak/Ibu/Saudara/i untuk hadir di acara pernikahan kami
          </p>
          <div className="w-20 h-1 bg-primary-500 mx-auto mt-6"></div>
        </AnimatedSection>

        <motion.div 
          className="flex flex-col md:flex-row gap-8 justify-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Groom */}
          <motion.div 
            className="flex-1 text-center"
            variants={itemVariants}
          >
            <div className="relative mx-auto w-56 h-56 mb-6 overflow-hidden rounded-full border-4 border-secondary-300 shadow-xl">
              <img 
                src="/galery/groom.webp" 
                alt="Groom" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-display text-3xl text-neutral-900 mb-2">
              {coupleInfo.groom.name}
            </h3>
            <p className="font-serif text-lg text-neutral-700 italic">
              Putra dari
            </p>
            <p className="text-neutral-800 font-medium">
              Bapak {coupleInfo.groom.fatherName}
            </p>
            <p className="text-neutral-800 font-medium mb-6">
              & Ibu {coupleInfo.groom.motherName}
            </p>
            <div className="flex justify-center">
              <div className="px-8 py-1 bg-secondary-100 text-secondary-600 rounded-full font-medium">
                The Groom
              </div>
            </div>
          </motion.div>

          {/* Divider for desktop */}
          <motion.div 
            className="hidden md:flex items-center justify-center"
            variants={itemVariants}
          >
            <div className="w-px h-64 bg-primary-200"></div>
            <div className="relative">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow">
                <div className="w-8 h-8 text-primary-500">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-px h-64 bg-primary-200"></div>
          </motion.div>

          {/* Bride */}
          <motion.div 
            className="flex-1 text-center"
            variants={itemVariants}
          >
            <div className="relative mx-auto w-56 h-56 mb-6 overflow-hidden rounded-full border-4 border-primary-300 shadow-xl">
              <img 
                src="/galery/the-bride.webp" 
                alt="Bride" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-display text-3xl text-neutral-900 mb-2">
              {coupleInfo.bride.name}
            </h3>
            <p className="font-serif text-lg text-neutral-700 italic">
              Putri dari
            </p>
            <p className="text-neutral-800 font-medium">
              Bapak {coupleInfo.bride.fatherName}
            </p>
            <p className="text-neutral-800 font-medium mb-6">
              & Ibu {coupleInfo.bride.motherName}
            </p>
            <div className="flex justify-center">
              <div className="px-8 py-1 bg-primary-100 text-primary-600 rounded-full font-medium">
                The Bride
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoupleInfo;