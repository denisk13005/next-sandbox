import React from "react";
import styles from "../styles/userModale.module.css";

const UserOptionModal = ({ open, setOpen }) => {
  console.log(open);
  return (
    <div className={`${styles.container} ${!open && styles.hidden}`}>
      user option modale
    </div>
  );
};

export default UserOptionModal;
