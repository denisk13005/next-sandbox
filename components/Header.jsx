import React from "react";
import { useRouter } from "next/router";
import styles from "../styles/header.module.css";

const Header = () => {
  const router = useRouter();
  console.log(router);
  return (
    <header
      className={`${router.pathname === "/" ? styles.hidden : styles.visible}`}
    >
      header
    </header>
  );
};

export default Header;
