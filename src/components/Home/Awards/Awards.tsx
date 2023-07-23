import React from "react";
import styles from "./Awards.module.scss";

interface awardsProps {
  scrollPosition: number;
  screenVh: number;
}

export default function Awards({ scrollPosition, screenVh }: awardsProps) {
  return (
    <section className={styles.background}>
      <h3>Awards</h3>
      <div className={styles.grid}>
        <div>
          <p>삼성 청년 SW아카데미</p>
          <h4>1학기 최우수 프로젝트 수상</h4>
          <div>
            <span>삼성전자주식회사</span>
            <span>2022. 11. 25.</span>
          </div>
        </div>
        <div>
          <p>삼성 청년 SW아카데미</p>
          <h4>특화 우수 프로젝트 수상</h4>
          <div>
            <span>삼성전자주식회사</span>
            <span>2023. 04. 07.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
