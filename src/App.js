import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import LatestNews from "./components/LatestNews";
import ListGames  from "./components/ListGames";
import DetailsGame from "./components/DetailsGame";
import About from "./components/About";
import Home from "./components/home/home";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/listgames" element={<ListGames />}></Route>
        <Route path="/game/:id" element={<DetailsGame />}></Route> //inserido agora
        <Route path="/latestnewsgames" element={<LatestNews />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
