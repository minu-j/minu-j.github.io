import React, { useState } from "react";
import styles from "./ProjectCard.module.scss";
import Card from "../../common/Card/Card";
import { SiFigma, SiGithub } from "react-icons/si";
import { IconType } from "react-icons";
import Image from "next/image";

interface projectCardProps {
  data: {
    title: string;
    date: string;
    skills: Array<IconType>;
    award?: string;
    color: string;
    image: string;
    video: string;
    content: string;
    github: string;
    figma: string;
  };
}

export default function ProjectCard({ data }: projectCardProps) {
  const [isMouseOver, setIsMouseOver] = useState(false);

  return (
    <section className={styles.project}>
      <Card width="100%" height="260px">
        <div
          style={{
            backgroundColor: data.color,
          }}
          className={styles.cardcontents}
          onMouseEnter={() => setIsMouseOver(true)}
          onMouseLeave={() => setIsMouseOver(false)}
        >
          {isMouseOver ? (
            <video
              src={`/videos/${data.video}.mp4`}
              loop
              autoPlay
              muted
              playsInline
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "brightness(0.8)",
              }}
            ></video>
          ) : (
            <Image
              width={120}
              height={40}
              alt="final Cut Pro Logo"
              src={data.image}
            />
          )}
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
