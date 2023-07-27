import React from "react";
import styles from "./ProjectCard.module.scss";
import Card from "../../common/Card/Card";
import { SiFigma, SiGithub } from "react-icons/si";
import { IconType } from "react-icons";

interface projectCardProps {
  data: {
    title: string;
    date: string;
    skills: Array<IconType>;
    award?: string;
    image: string;
    content: string;
    github: string;
    figma: string;
  };
}

export default function ProjectCard({ data }: projectCardProps) {
  return (
    <section className={styles.project}>
      <Card width="100%" height="220px">
        <div
          style={{
            backgroundImage: `url(https://drive.google.com/uc?id=${data.image})`,
          }}
          className={styles.cardcontents}
        >
          <p className={styles.date}>{data.date}</p>
          <div className={styles.skills}>
            {data.skills.map((value, idx) => {
              const Icon = value;
              return <Icon key={`icon-${idx}`} />;
            })}
          </div>
        </div>
      </Card>
      <div className={styles.text}>
        <h2 className={styles.title}>{data.title}</h2>
        <p className={styles.award}>{data.award ? data.award : null}</p>
        <p className={styles.content}>{data.content}</p>
        <div className={styles.link}>
          <a onClick={() => window.open(data.github)}>
            <SiGithub />
            <span>GitHub</span>
          </a>
          <a onClick={() => window.open(data.figma)}>
            <SiFigma />
            <span>Figma</span>
          </a>
        </div>
      </div>
    </section>
  );
}
