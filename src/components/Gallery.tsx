import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { galleryImages } from '../data/weddingData';
// import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openLightbox = (src: string) => {
    setSelectedImage(src);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="py-24 bg-neutral-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary-100 opacity-60"></div>
      <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-secondary-100 opacity-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-neutral-900 mb-4">
            Our Gallery
          </h2>
          <p className="max-w-2xl mx-auto text-neutral-600">
            Kenangan indah perjalanan cinta kami
          </p>
          <div className="w-20 h-1 bg-primary-500 mx-auto mt-6"></div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <AnimatedSection 
              key={image.id} 
              className="cursor-pointer overflow-hidden rounded-xl shadow-lg"
              delay={index * 0.1}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                onClick={() => openLightbox(image.src)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-64 object-cover transition-transform"
                />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
      
      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
          >
            {/* <X size={24} /> */}
            <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="lucide lucide-x-icon lucide-x"
>
  <path d="M18 6 6 18" />
  <path d="m6 6 12 12" />
</svg>

          </button>
          <div 
            className="max-w-4xl max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage} 
              alt="Gallery image" 
              className="max-w-full max-h-[80vh] object-contain"
            />
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Gallery;