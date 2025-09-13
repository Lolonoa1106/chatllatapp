import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout'
import Home from './pages/Home'
import Contact from './pages/Contact'
import NoPage from './pages/NoPage'
import TermsCondition from './pages/TermsCondition';
import PrivacyPolicy from './pages/PrivacyPolicy';
import UserGuide from './pages/UserGuide';
import Blog from './pages/Blog';
import BlogPage from './pages/BlogPage';
import ScrollToTop from './component/ScrollToTop';
import Partners from './pages/Partners';
import FaqsPage from './pages/Faqspage';
// import { useEffect } from 'react';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="terms-and-condition" element={<TermsCondition />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="user-guide" element={<UserGuide />} />
          <Route path="blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPage />} />
          <Route path="partner" element={<Partners />} />
          <Route path="faqs" element={<FaqsPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
