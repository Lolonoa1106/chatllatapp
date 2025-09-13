import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';
import './i18n/index.js';
// import Layout from './pages/Layout'
// import Home from './pages/Home'
// import Contact from './pages/Contact'
// import NoPage from './pages/NoPage'

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="*" element={<NoPage />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  // </React.StrictMode>
);