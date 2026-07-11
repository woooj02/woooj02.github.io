import "./App.css";
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";
import Home from "./Pages/Home/Homescreen";
import BlogPost from "./Pages/Blog/Post";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
