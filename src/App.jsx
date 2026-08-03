import { Routes, Route } from "react-router";
import { ShellLayout } from "./components/ShellLayout";
import { Home } from "./pages/Home";
import { Product } from "./pages/Product";
import { ProductDetail } from "./pages/ProductDetail";
import { NotFound } from "./pages/NotFound";
import { About } from "./pages/About";
import "./App.css";

export const App = () => {
  return (
    <Routes>
      <Route element={<ShellLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="product" element={<Product />} />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
