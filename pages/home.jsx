import React from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/home.module.css";

const Home = () => {
  return (
    <main className={styles.homeMainContainer}>
      <Navbar />
      <div style={{ width: "33%", border: "1px solid white" }}>Container</div>
      <div style={{ width: "33%", border: "1px solid white" }}>Right</div>
    </main>
  );
};

export default Home;
