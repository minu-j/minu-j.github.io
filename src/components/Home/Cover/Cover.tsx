import Image from "next/image";
import styles from "./Cover.module.scss";
import memoji from "@/public/images/memoji.png";

interface coverProps {
  scrollPosition: number;
  screenVh: number;
}

export default function Cover({ scrollPosition, screenVh }: coverProps) {
  return (
    <section>
      <div
        className={styles.background}
        style={{
          position: `${screenVh >= scrollPosition ? `fixed` : `absolute`}`,
          bottom: `${
            screenVh >= scrollPosition
              ? `calc(${(scrollPosition / screenVh) * 20}px)`
              : `20px`
          }`,
          left: `${
            screenVh >= scrollPosition
              ? `calc(${(scrollPosition / screenVh) * 20}px)`
              : `20px`
          }`,
          width: `${
            screenVh >= scrollPosition
              ? `calc(100vw - ${(scrollPosition / screenVh) * 40}px)`
              : `calc(100vw - 40px)`
          }`,
          height: `${
            screenVh >= scrollPosition
              ? `calc(100vh - ${(scrollPosition / screenVh) * 40}px)`
              : `calc(100vh - 40px)`
          }`,
          borderRadius: `${
            screenVh >= scrollPosition
              ? `calc(${(scrollPosition / screenVh) * 24}px)`
              : `24px`
          }`,
        }}
      >
        <Image
          className={styles.memoji}
          width={260}
          height={260}
          alt="memoji"
          src={memoji}
        ></Image>
      </div>
      <div className={styles["cover-content"]}>
        <div className={styles["name-box"]}>
          <h1 className={`${styles.name} ${styles["name-kor"]}`}>정민우</h1>
          <h2 className={`${styles.name} ${styles["name-eng"]}`}>JUNG MINU</h2>
        </div>
        <div className={styles["headline-box"]}>
          <h2 className={`${styles.name} ${styles.headline}`}>감각있는</h2>
          <h2 className={`${styles.name} ${styles.headline}`}>프론트엔드</h2>
          <h2 className={`${styles.name} ${styles.headline}`}>개발자</h2>
        </div>
      </div>
    </section>
  );
}
