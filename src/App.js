import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Shows from "./pages/Shows";
import Movies from "./pages/Movies";
import Latest from "./pages/Latest";
import MyList from "./pages/MyList";
import BrowseLang from "./pages/BrowseLang";
import Kids from "./pages/Kids";
import DVD from "./pages/DVD";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/browse" element={<Home />} />
        <Route path="/browse/tv-shows" element={<Shows />} />
        <Route path="/browse/movies" element={<Movies />} />
        <Route path="/latest" element={<Latest />} />
        <Route path="/browse/my-list" element={<MyList />} />
        <Route path="/browse/original-audio" element={<BrowseLang />} />
        <Route path="/Kids" element={<Kids />} />
        <Route path="/DVD" element={<DVD />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
