import AnimatedSection from './AnimatedSection';
import { especialInvitees } from '../data/weddingData';
// import { Users } from 'lucide-react';

const SpecialInvitees = () => {
  return (
    <section className="py-16 bg-neutral-950 text-white relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/30 to-secondary-900/30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-primary-800/50 rounded-full flex items-center justify-center">
              {/* <Users size={32} className="text-primary-300" /> */}
              <svg
  xmlns="http://www.w3.org/2000/svg"
  width="32"
  height="32"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="lucide lucide-users-icon lucide-users"
>
  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
  <path d="M16 3.128a4 4 0 0 1 0 7.744" />
  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
  <circle cx="9" cy="7" r="4" />
</svg>

            </div>
          </div>
          <h2 className="font-display text-3xl md:text-4xl mb-4">Turut Mengundang</h2>
          <div className="w-16 h-1 bg-primary-500 mx-auto"></div>
        </AnimatedSection>
        
        <AnimatedSection className="max-w-3xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {especialInvitees.map((name, index) => (
              <div 
                key={index}
                className="bg-white/5 border border-white/10 backdrop-blur-sm px-6 py-3 rounded-full"
              >
                <span>{name}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default SpecialInvitees;