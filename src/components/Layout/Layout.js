import React from "react";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <nav className="fixed w-full z-[999] bg-brand top-0">
        <Navbar />
      </nav>

      <main className="w-full absolute flex justify-start">
        <nav className=" fixed bg-sidebar bg-opacity-100 pt-[70px]  bottom-0 left-0 w-[225px] h-screen overflow-y-auto">
          <Sidebar />
        </nav>
        <section className="w-[1190px] grow ml-[225px] mt-[76px] pb-16">
          {children}
        </section>
      </main>
    </>
  );
};

export default Layout;
