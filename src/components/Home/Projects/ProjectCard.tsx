import React from "react";
import styles from "./ProjectCard.module.scss";
import Card from "../../common/Card/Card";
import { SiFigma, SiGithub } from "react-icons/si";

interface projectCardProps {
  data: {
    title: string;
    date: string;
    content: string;
  };
}

export default function ProjectCard({ data }: projectCardProps) {
  return (
    <section className={styles.project}>
      <Card width="100%" height="220px">
        <div className={styles.date}>{data.date}</div>
      </Card>
      <div className={styles.text}>
        <h2 className={styles.title}>{data.title}</h2>
        <p className={styles.content}>{data.content}</p>
        <div className={styles.link}>
          <a>
            <SiGithub />
            <span>GitHub</span>
          </a>
          <a>
            <SiFigma />
            <span>Figma</span>
          </a>
        </div>
      </div>
    </section>
  );
}
