import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";
import Home from "./Pages/Home/Homescreen";
import MyPortfolio from "./Pages/Home/MyPortfolio";
import Hackathons from "./Pages/Home/Hackathons";
import OpenSource from "./Pages/Home/OpenSource";
import AboutMe from "./Pages/Home/AboutMe";
import Blog from "./Pages/Home/Blog";
import ContactMe from "./Pages/Home/ContactMe";
import Hire from "./Pages/Home/Hire";
import Footer from "./Pages/Home/Footer";
import BlogPost from "./Pages/Blog/Post";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<main className="page"><Hackathons /><OpenSource /><MyPortfolio /></main>} />
          <Route path="/about" element={<main className="page"><AboutMe /></main>} />
          <Route path="/blog" element={<main className="page"><Blog /></main>} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/hire" element={<main className="page"><Hire /></main>} />
          <Route path="/contact" element={<main className="page"><ContactMe /></main>} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
