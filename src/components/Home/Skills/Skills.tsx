import React from "react";
import styles from "./Skills.module.scss";

interface skillsProps {
  scrollPosition: number;
  screenVh: number;
}

export default function Skills({ scrollPosition, screenVh }: skillsProps) {
  return (
    <section className={styles.background}>
      <h3>Skills</h3>
    </section>
  );
}
