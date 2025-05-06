// import { useState, useEffect } from 'react';
// import Header from './components/Header';
// import Hero from './components/Hero';
// import CoupleInfo from './components/CoupleInfo';
// import Countdown from './components/Countdown';
// import EventDetails from './components/EventDetails';
// import Gallery from './components/Gallery';
// import RSVP from './components/RSVP';
// import Footer from './components/Footer';
// import SpecialInvitees from './components/SpecialInvitees';
// import OpeningCard from './components/OpeningCard';
// import AudioBackground from './components/AudioBackground';

// function App() {
//   const [showInvitation, setShowInvitation] = useState(false);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Simulate loading assets
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 1500);
    
//     return () => clearTimeout(timer);
//   }, []);

//   if (loading) {
//     return (
//       <div className="fixed inset-0 bg-neutral-950 flex items-center justify-center z-50">
//         <div className="text-center">
//           <div className="inline-block w-16 h-16 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mb-4"></div>
//           <p className="text-white">Loading invitation...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="font-sans">
//       {!showInvitation && (
//         <OpeningCard onOpen={() => setShowInvitation(true)} />
//       )}
      
//       {showInvitation && (
//         <>
//           <Header />
//           <Hero />
//           <CoupleInfo />
//           <Countdown />
//           <EventDetails />
//           <SpecialInvitees />
//           <Gallery />
//           <RSVP />
//           <Footer />
//           <AudioBackground />
//         </>
//       )}
//     </div>
//   );
// }

// export default App;
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import CoupleInfo from './components/CoupleInfo';
import Countdown from './components/Countdown';
import EventDetails from './components/EventDetails';
import Gallery from './components/Gallery';
import RSVP from './components/RSVP';
import Footer from './components/Footer';
import SpecialInvitees from './components/SpecialInvitees';
import OpeningCard from './components/OpeningCard';
import AudioBackground from './components/AudioBackground';

function App() {
  const [showInvitation, setShowInvitation] = useState(false);
  const [loading, setLoading] = useState(true);

  const [searchParams] = useSearchParams();
  const guestName = searchParams.get('to') || 'Tamu Undangan'; // Menangkap parameter 'to'

  useEffect(() => {
    // Simulate loading assets
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-neutral-950 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="inline-block w-16 h-16 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mb-4"></div>
          <p className="text-white">Loading invitation...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="font-sans">
      {!showInvitation && (
        <OpeningCard onOpen={() => setShowInvitation(true)} guestName={guestName} />
      )}
      
      {showInvitation && (
        <>
          <Header />
          <Hero />
          <CoupleInfo />
          <Countdown />
          <EventDetails />
          <SpecialInvitees />
          <Gallery />
          <RSVP />
          <Footer />
          <AudioBackground />
        </>
      )}
    </div>
  );
}

export default App;
