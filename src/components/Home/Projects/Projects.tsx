import React from "react";
import styles from "./Projects.module.scss";
import Card from "../../common/Card/Card";

interface projectsProps {
  scrollPosition: number;
  screenVh: number;
}

export default function Projects({ scrollPosition, screenVh }: projectsProps) {
  return (
    <section className={styles.background}>
      <h3>Projects</h3>
      <Card width="100%" height="420px">
        <div>asdf</div>
      </Card>
    </section>
  );
}
