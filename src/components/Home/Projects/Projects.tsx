import React from "react";
import styles from "./Projects.module.scss";
import { BsArrowRightCircle } from "react-icons/bs";
import ProjectCard from "./ProjectCard";
import {
  SiAndroidstudio,
  SiDart,
  SiDjango,
  SiFigma,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiJavascript,
  SiPython,
  SiReact,
  SiRedux,
  SiSass,
  SiTypescript,
  SiVuedotjs,
  SiXcode,
} from "react-icons/si";

interface projectsProps {
  scrollPosition: number;
  screenVh: number;
}

export default function Projects({ scrollPosition, screenVh }: projectsProps) {
  const data = [
    {
      title: "42",
      date: "2023.04.~2023.05.",
      skills: [SiTypescript, SiReact, SiFirebase, SiGit, SiFigma],
      image: "1YvAF0NMYV6g0QKPsPSR-X0HRPCjrsN00",
      content: `사이는 일상 속 내 주변을 스쳐 지나가는 인연들에 대한 호기심에서 시작되었습니다. 
      주변 생각을 피드에 기록하고, 우연히 다시 마주친 익명의 낯선 인연과의 만남을 
      알려주는 위치기반 익명 SNS 서비스입니다.`,
      github: "https://github.com/people42/people42",
      figma:
        "https://www.figma.com/file/L3CelmgNIWFyPxj8kOer0Z/Project-42?type=design&node-id=0%3A1&t=xIJySDpaz5WBkMx1-1",
    },
    {
      title: "Co-cook!",
      date: "2023.02.~2023.04.",
      skills: [SiDart, SiFlutter, SiXcode, SiAndroidstudio, SiGit, SiFigma],
      image: "1r7oXn9D8QKJERO_1lbhUni3med0Jt9fi",
      award: "삼성 청년 SW 아카데미 우수 프로젝트 수상",
      content: `Co-cook!은 요리 중 스마트폰을 손으로 만지기 어렵다는 점에 착안한 서비스로
      AI기반 음성인식 기술로 음성 명령을 인식하여 레시피를 제어할 수 있는
      크로스 플랫폼 모바일 앱입니다.`,
      github: "https://github.com/team-co-cook/co-cook",
      figma:
        "https://www.figma.com/file/u83HRrNeDlQm7oqFonlJan/Cocook?type=design&node-id=0%3A1&t=fU5TGMqgqEnWuhsD-1",
    },
    {
      title: "마이 리틀 쥬라기",
      date: "2023.01.~2023.02.",
      skills: [SiTypescript, SiReact, SiRedux, SiGit, SiFigma],
      image: "1W71NuV1ZaKgHdAQQcUwN6yvMzzRKeUxo",
      content: `마이리틀 쥬라기는 최근 떠오르는 이색 반려동물 시장을 공략한
      전국 이색 반려동물 샵 통합 관리 서비스입니다.
      체험 이벤트 예약과 실시간 방송 중계 모니터링을 지원합니다.`,
      github: "https://github.com/My-Little-Jurassic/Marizoo",
      figma:
        "https://www.figma.com/file/UuVefTqhUXn0jdwGV33AkP/마리쥬와이어프레임?type=design&node-id=150%3A2&t=MYsKAuMTkGGUhFJ0-1",
    },
    {
      title: "Argos",
      date: "2022.11.",
      skills: [
        SiJavascript,
        SiVuedotjs,
        SiSass,
        SiPython,
        SiDjango,
        SiGit,
        SiFigma,
      ],
      image: "1A22COM8zn2mWMacCspvkW3qToRvX2Nb0",
      award: "삼성 청년 SW 아카데미 최우수 프로젝트 수상",
      content: `ARGOS는 자체적인 알고리즘을 통해 사용자의 영화 평가 데이터를 기반으로 한 개인 맞춤형 영화 추천 서비스입니다.`,
      github: "https://github.com/minu-j/Argos",
      figma:
        "https://www.figma.com/file/hA7puTwhUZCikTePZ8Y5Vg/ARGOS?type=design&node-id=5%3A2&mode=design&t=Y2QhHmOR8CoVDEkH-1",
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
