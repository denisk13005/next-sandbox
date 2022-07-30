import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import TweetModal from "./TweetModal";

const Layout = ({ children }) => {
  const [tweet, setTweet] = useState(false);
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
      <TweetModal />
      <Navbar />
      {children}
      <div style={{ width: "33%" }}>right section</div>
      {/* <Footer/> */}
    </div>
  );
};

export default Layout;
