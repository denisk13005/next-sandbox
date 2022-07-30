import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* <Header/> */}
      <Navbar />
      {children}
      <div style={{ width: "33%" }}>right section</div>
      {/* <Footer/> */}
    </div>
  );
};

export default Layout;
