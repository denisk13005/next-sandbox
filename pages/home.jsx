import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <main style={{ display: "flex", height: "100vh" }}>
      <Navbar />
      <div style={{ width: "33%", border: "1px solid white" }}>Container</div>
      <div style={{ width: "33%", border: "1px solid white" }}>Right</div>
    </main>
  );
};

export default Home;
