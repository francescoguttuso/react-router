import "./ShellLayout.css";
import { Outlet } from "react-router";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const ShellLayout = () => (
  <div className="shell-layout">
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
  </div>
);
