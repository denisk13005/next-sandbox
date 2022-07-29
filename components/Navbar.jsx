import React from "react";
import styles from "../styles/navbar.module.css";
import { FaTwitter } from "react-icons/fa";
import { GiBirdHouse } from "react-icons/gi";
import { RiHashtag } from "react-icons/ri";
import { VscBell } from "react-icons/vsc";
import { BiEnvelope } from "react-icons/bi";
import { BiBookmark } from "react-icons/bi";
import { RiFileList2Line } from "react-icons/ri";
import { HiOutlineUser } from "react-icons/hi";
import { CgMoreO } from "react-icons/cg";

const Navbar = () => {
  return (
    <aside className={styles.navbarContainer}>
      <nav className={styles.navbar}>
        <li className={styles.icone}>
          <FaTwitter />
        </li>
        <li className={styles.home}>
          <GiBirdHouse />
          Home
        </li>
        <li className={styles.explore}>
          <RiHashtag />
          Explore
        </li>
        <li className={styles.notifications}>
          <VscBell /> Notifications
        </li>
        <li className={styles.message}>
          <BiEnvelope /> Messages
        </li>
        <li className={styles.bookmarks}>
          <BiBookmark /> Bookmarks
        </li>
        <li className={styles.lists}>
          <RiFileList2Line /> Lists
        </li>
        <li className={styles.profile}>
          <HiOutlineUser /> Profile
        </li>
        <li className={styles.more}>
          <CgMoreO /> More
        </li>
      </nav>
    </aside>
  );
};

export default Navbar;
