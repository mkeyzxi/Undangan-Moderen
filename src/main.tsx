// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// // import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import App from './App.tsx';
// import './index.css';

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );


import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import BrowserRouter dan Routes
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>  {/* Membungkus seluruh aplikasi dengan Router */}
      <Routes>
        <Route path="/" element={<App />} />  {/* Menambahkan Route dengan parameter :to */}
        <Route path="/:to" element={<App />} />  {/* Menambahkan Route dengan parameter :to */}
      </Routes>
    </Router>
  </StrictMode>
);
