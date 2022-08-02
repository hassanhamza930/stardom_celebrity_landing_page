import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";

export default function App() {
  return (
    <div className="h-screen w-full flex">
      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<Home />} />

      </Routes>
    </div>
  );
}

