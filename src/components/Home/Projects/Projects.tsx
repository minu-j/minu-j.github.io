import React from "react";
import styles from "./Projects.module.scss";
import Card from "../../common/Card/Card";
import { BsArrowRightCircle } from "react-icons/bs";

interface projectsProps {
  scrollPosition: number;
  screenVh: number;
}

export default function Projects({ scrollPosition, screenVh }: projectsProps) {
  return (
    <section className={styles.background}>
      <h3>Projects</h3>
      <Card width="100%" height="420px">
        <>
          <video
            src="/videos/projects.mp4"
            loop
            autoPlay
            muted
            playsInline
            style={{
              position: "absolute",
              left: "0px",
              top: "0px",
              filter: "brightness(0.6)",
            }}
          ></video>
          <div>
            <span>프로젝트 더 보기</span>
            <BsArrowRightCircle />
          </div>
        </>
      </Card>
    </section>
  );
}
