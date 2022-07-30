import React from "react";
import Image from "next/image";
import photo from "../public/photo.jpg";
import styles from "../styles/tweetModale.module.css";
import { GrFormClose } from "react-icons/gr";
const TweetModal = () => {
  return (
    <section className={styles.container}>
      <div className={styles.modaleContainer}>
        <GrFormClose />
        <div className={styles.pictureAndForm}>
          <div className={styles.pictureContainer}>
            <Image src={photo} alt="user picture" width="100%" height="100%" />
          </div>
          <form action="">
            <input type="text" placeholder="entrez votre tweet" />
          </form>
        </div>
        <form action=""></form>
      </div>
    </section>
  );
};

export default TweetModal;
