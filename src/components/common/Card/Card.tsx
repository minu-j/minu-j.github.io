import React, { ReactElement } from "react";
import styles from "./Card.module.scss";

interface cardProps {
  children: ReactElement;
  width: string;
  height: string;
}

export default function Card({ children, width, height }: cardProps) {
  return (
    <section
      className={styles.background}
      style={{ width: width, height: height }}
    >
      {children}
    </section>
  );
}
