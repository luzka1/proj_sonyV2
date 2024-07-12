import { useEffect, useState } from "react";
import { Intro, Principal, History } from "../../components";
import styles from "./styles.module.css";
import { scrollToTop } from "../../themes";
import { backgroundColor, height } from "styled-system";

export const Gow = () => {
  const [intro, setIntro] = useState<boolean>(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIntro(false);
    }, 2000);

    setTimeout(() => {
      clearInterval(interval);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    scrollToTop();
  });

  const heightDiv = {
    backgroundColor:"white",
    height: "100px",
  }

  return (
    <>
      {intro ? <Intro /> : null}
      <main className={styles.container}>
        <div className={styles.principal}>
          <Principal />
        </div>
        <div style={heightDiv}/>
        <div className={styles.history}>
          <History />
        </div>
        <div style={heightDiv}/>
      </main>
    </>
  );
};
