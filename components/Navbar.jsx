import React, { useState } from "react";
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
import { RiMoreFill } from "react-icons/ri";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import photo from "../public/photo.jpg";
import UserOptionModal from "./UserOptionModal";

const Navbar = () => {
  const router = useRouter();
  const path = router.pathname;
  console.log(path);
  const [open, setOpen] = useState(false);
  const toggleUserModale = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const tweet = () => {
    console.log("tweet");
  };
  return (
    <aside className={styles.navbarContainer}>
      <UserOptionModal open={open} setOpen={setOpen} />
      <nav className={styles.navbar}>
        <li className={styles.icone}>
          <FaTwitter />
        </li>
        <Link href="/home" aria-label="Home" passHref>
          <li className={path !== "/home" ? styles.icons : styles.active}>
            <GiBirdHouse />
            <span className={styles.span}>Home</span>
          </li>
        </Link>
        <Link href="/explore" aria-label="Explore" passHref>
          <li className={path !== "/explore" ? styles.icons : styles.active}>
            <RiHashtag />
            <span className={styles.span}>Explore</span>
          </li>
        </Link>
        <Link href="/notifications" aria-label="Notifications" passHref>
          <li
            className={path !== "/notifications" ? styles.icons : styles.active}
          >
            <VscBell />
            <span className={styles.span}>Notifications</span>
          </li>
        </Link>
        <Link href="/messages" aria-label="Messages" passHref>
          <li className={path !== "/messages" ? styles.icons : styles.active}>
            <BiEnvelope />
            <span className={styles.span}>Messages</span>
          </li>
        </Link>
        <Link href="/bookmarks" aria-label="Bookmarks" passHref>
          <li className={path !== "/bookmarks" ? styles.icons : styles.active}>
            <BiBookmark /> <span className={styles.span}>Bookmarks</span>
          </li>
        </Link>
        <Link href="/lists" aria-label="Lists" passHref>
          <li className={path !== "/lists" ? styles.icons : styles.active}>
            <RiFileList2Line /> <span className={styles.span}>Lists</span>
          </li>
        </Link>
        <Link href="/profile" aria-label="Profile" passHref>
          <li className={path !== "/profile" ? styles.icons : styles.active}>
            <HiOutlineUser />
            <span className={styles.span}>Profile</span>
          </li>
        </Link>
        <Link href="/more" aria-label="More" passHref>
          <li className={styles.icons}>
            <CgMoreO />
            <span className={styles.span}>More</span>
          </li>
        </Link>
      </nav>
      <button className={styles.tweetBtn} onClick={() => tweet()}>
        Tweet
      </button>
      <div className={styles.userInfo}>
        <div className={styles.imgContainer}>
          <Image src={photo} width="100%" height="100%" alt="user picture" />
        </div>
        <div className={styles.userName}>
          <h4>user name</h4>
          <p>@user surname</p>
        </div>
        <RiMoreFill
          style={{ fontSize: "30px", cursor: "pointer" }}
          onClick={() => toggleUserModale()}
        />
      </div>
    </aside>
  );
};

export default Navbar;
