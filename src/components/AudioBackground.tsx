// import{ useState, useEffect, useRef } from 'react';
// // import { Music, Pause } from 'lucide-react';

// const AudioBackground = () => {
//   const [isPlaying, setIsPlaying] = useState(true);
//   const audioRef = useRef<HTMLAudioElement | null>(null);
  
//   useEffect(() => {
//     audioRef.current = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
//     audioRef.current.loop = true;
//     audioRef.current.volume = 0.3;
    
//     return () => {
//       if (audioRef.current) {
//         audioRef.current.pause();
//         audioRef.current = null;
//       }
//     };
//   }, []);
  
//   const toggleAudio = () => {
//     if (audioRef.current) {
//       if (isPlaying) {
//         audioRef.current.pause();
//       } else {
//         audioRef.current.play();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };
  
//   return (
//     <button
//       onClick={toggleAudio}
//       className={`fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all ${
//         isPlaying ? 'bg-primary-600 text-white' : 'bg-white text-primary-600'
//       }`}
//     >
//       {isPlaying ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" className="lucide lucide-pause-icon lucide-pause"><rect x="14" y="4" width="4" height="16" rx="1"/><rect x="6" y="4" width="4" height="16" rx="1"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" className="lucide lucide-music-icon lucide-music"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>}
//     </button>
//   );
// };

// export default AudioBackground;

import { useState, useEffect, useRef } from 'react';

const AudioBackground = () => {
  const [isPlaying, setIsPlaying] = useState(true); // langsung true
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio('./song-anugrah-terindah-andmesh.mp3');
    audio.loop = true;
    audio.volume = 0.9;
    audioRef.current = audio;

    // Coba play saat load (mungkin butuh interaksi pengguna di beberapa browser)
    audio
      .play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch((err) => {
        console.warn('Autoplay gagal:', err);
        setIsPlaying(false);
      });

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <button
      onClick={toggleAudio}
      className={`fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all ${
        isPlaying ? 'bg-primary-600 text-white' : 'bg-white text-primary-600'
      }`}
    >
      {isPlaying ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
             className="lucide lucide-pause-icon lucide-pause">
          <rect x="14" y="4" width="4" height="16" rx="1"/>
          <rect x="6" y="4" width="4" height="16" rx="1"/>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
             className="lucide lucide-music-icon lucide-music">
          <path d="M9 18V5l12-2v13"/>
          <circle cx="6" cy="18" r="3"/>
          <circle cx="18" cy="16" r="3"/>
        </svg>
      )}
    </button>
  );
};

export default AudioBackground;
