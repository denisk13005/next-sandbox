import React from "react";
import styles from "../styles/userModale.module.css";
import Image from "next/image";
import photo from "../public/photo.jpg";
import { FiCheck } from "react-icons/fi";
const UserOptionModal = ({ open }) => {
  console.log(open);
  return (
    <div className={`${!open ? styles.hidden : styles.container}`}>
      <div className={styles.userInfoContainer}>
        <div className={styles.imgContainer}>
          <Image src={photo} width="100%" height="100%" alt="user picture" />
        </div>
        <div className={styles.userName}>
          <h4>user name</h4>
          <p>@user surname</p>
        </div>
        <FiCheck style={{ fontSize: "30px", color: "blue" }} />
      </div>
      <div className={styles.options}>
        <p>add an existing account</p>
        <p>logout @user usersurname</p>
      </div>
    </div>
  );
};

export default UserOptionModal;
