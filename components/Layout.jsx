import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import TweetModal from "./TweetModal";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <TweetModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <Navbar navOpen={navOpen} setModalOpen={setModalOpen} />
      {children}
      <div style={{ width: "33%" }}>right section</div>
    </div>
  );
};

export default Layout;
