import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import TweetModal from "./TweetModal";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(true);
  const [navOpen, setNavOpen] = useState(false);
  const toggleModal = () => {
    modalOpen ? setModalOpen(false) : setModalOpen(true);
  };

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
