import React from "react";
import styles from "./Contect.module.scss";

export default function Contect() {
  return (
    <section className={styles.background}>
      <h3>Contect</h3>
      <a href="mailto: minu.j.dev@gmail.com" className={styles.link}>
        minu.j.dev@gmail.com
      </a>
    </section>
  );
}
