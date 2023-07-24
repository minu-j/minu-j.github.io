import React, { ReactElement } from "react";
import styles from "./Card.module.scss";

interface cardProps {
  children: ReactElement;
  width: string;
  height: string;
  className?: string;
}

export default function Card({
  children,
  width,
  height,
  className,
}: cardProps) {
  return (
    <section
      className={`${styles.background} ${className}`}
      style={{ width: width, height: height }}
    >
      {children}
    </section>
  );
}
