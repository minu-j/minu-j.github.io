import React from "react";
import styles from "./Projects.module.scss";
import { BsArrowRightCircle } from "react-icons/bs";
import ProjectCard from "./ProjectCard";

interface projectsProps {
  scrollPosition: number;
  screenVh: number;
}

export default function Projects({ scrollPosition, screenVh }: projectsProps) {
  const data = [
    {
      title: "42",
      date: "2022.06.~2022.06.",
      content: `사이는 일상 속 내 주변을 스쳐 지나가는 인연들에 대한 호기심에서 시작되었습니다. 
      주변 생각을 피드에 기록하고, 우연히 다시 마주친 익명의 낯선 인연과의 만남을 
      알려주는 위치기반 익명 SNS 서비스입니다.`,
    },
    {
      title: "Co-cook!",
      date: "2022.06.~2022.06.",
      content: `Co-cook!은 요리 중 스마트폰을 손으로 만지기 어렵다는 점에 착안한 서비스로
      AI기반 음성인식 기술로 음성 명령을 인식하여 레시피를 제어할 수 있는
      크로스 플랫폼 모바일 앱입니다.`,
    },
    {
      title: "마이 리틀 쥬라기",
      date: "2022.06.~2022.06.",
      content: `마이리틀 쥬라기는 최근 떠오르는 이색 반려동물 시장을 공략한
      전국 이색 반려동물 샵 통합 관리 서비스입니다.
      체험 이벤트 예약과 실시간 방송 중계 모니터링을 지원합니다.`,
    },
    {
      title: "Argos",
      date: "2022.06.~2022.06.",
      content: `ARGOS는 자체적인 알고리즘을 통해 사용자의 영화 평가 데이터를 기반으로 한 개인 맞춤형 영화 추천 서비스입니다.`,
    },
  ];
  return (
    <section className={styles.background}>
      <h3>Projects</h3>
      <div className={styles.grid}>
        {data.map((value, idx) => (
          <ProjectCard key={`project-card-${idx}`} data={value}></ProjectCard>
        ))}
      </div>
      <a
        onClick={() =>
          window.open(
            "https://drive.google.com/file/d/1knkPv8jLGlzB7KdUAr0fUxgj3onHktHz/view"
          )
        }
      >
        <span>프로젝트 자세히 보기</span>
        <BsArrowRightCircle />
      </a>
    </section>
  );
}
