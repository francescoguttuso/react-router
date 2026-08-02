import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import { Home } from "./pages/Home";
import { Product } from "./pages/Product";
import { About } from "./pages/About";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/product" element={<Product />} />
    </Routes>
  );
};
