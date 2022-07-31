import React, { useEffect } from "react";
import Image from "next/image";
import photo from "../public/photo.jpg";
import styles from "../styles/tweetModale.module.css";
import { RiCloseFill } from "react-icons/ri";
import { BiWorld } from "react-icons/bi";
const TweetModal = ({ modalOpen, setModalOpen }) => {
  const closeModal = () => {
    setModalOpen(false);
  };
  const submitTweet = (e) => {
    e.preventDefault();
    console.log("submit");
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const close = (e) => {
    e.key === "Escape" && setModalOpen(false);
  };

  useEffect(() => {
    window.addEventListener("keyup", close);
    return () => {
      window.removeEventListener("keyup", close);
    };
  }, [close]);
  return (
    <section
      className={`${modalOpen ? styles.container : styles.hidden}`}
      onKeyUp={() => console.log("tst")}
    >
      <div className={styles.modaleContainer}>
        <RiCloseFill className={styles.close} onClick={closeModal} />
        <div className={styles.pictureAndForm}>
          <div className={styles.pictureContainer}>
            <Image src={photo} alt="user picture" width="100%" height="100%" />
          </div>
          <form onSubmit={submitTweet}>
            <input type="text" placeholder="What's happening?" />
            <button type="submit" className={styles.tweetBtn}>
              Tweet
            </button>
          </form>
        </div>
        <div className={styles.optionInput}>
          <div className={styles.reply}>
            <BiWorld
              style={{ color: "#1d9bf0", fontSize: "19px", marginTop: "5px" }}
            />
            <p>Everyone can reply</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TweetModal;
