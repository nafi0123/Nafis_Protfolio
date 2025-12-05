import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Nvabar/Nvabar";
import Footer from "../components/Footer/Footer";

const Root = () => {
  return (
    <div className="bg-slate-900">
      <header className="w-11/12 mx-auto  sticky top-0 z-20 shadow-xl">
        <Navbar />
      </header>

      <main className="w-11/12 mx-auto">
        <Outlet />
      </main>
      <footer className="bg-gray-800">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Root;
