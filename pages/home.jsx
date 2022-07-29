import React from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/home.module.css";

const Home = () => {
  return (
    <main className={styles.homeMainContainer}>
      <Navbar />
      <div>Container</div>
      <div>Right</div>
    </main>
  );
};

export default Home;
