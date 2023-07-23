import React from "react";
import styles from "./Footer.module.scss";
import Image from "next/image";
import memoji from "@/public/images/memoji.png";

export default function Footer() {
  return (
    <section className={styles.background}>
      <div className={styles.name}>JUNG MINU</div>
      <div className={styles.footer}>
        <div className={styles.info}>
          <p>minu.j.dev@gmail.com</p>
          <p>© 2023 JUNG MINU</p>
        </div>
        <div className={styles.link}>
          <a href="#">GitHub</a>
          <a href="#">velog</a>
          <a href="#">Instagram</a>
        </div>
      </div>
      <Image
        className={styles.memoji}
        width={160}
        height={160}
        alt="memoji"
        src={memoji}
      ></Image>
    </section>
  );
}
