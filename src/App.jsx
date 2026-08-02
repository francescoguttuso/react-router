import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import { ShellLayout } from "./components/ShellLayout";
import { Home } from "./pages/Home";
import { Product } from "./pages/Product";
import { About } from "./pages/About";

export const App = () => {
  return (
    <Routes>
      <Route element={<ShellLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="product" element={<Product />} />
      </Route>
    </Routes>
  );
};
