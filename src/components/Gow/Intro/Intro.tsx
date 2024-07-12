import React from "react";
import styles from "./styles.module.css";
import { motion } from "framer-motion";
import { item } from "../../../themes";

export const Intro = () => {
  return (
    <>
      <motion.main className={styles.content}>
        <motion.div
          variants={item}
          initial="hidden"
          animate="visible"
          className={styles.introduction}
          transition={{
            duration: 1.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        ></motion.div>
      </motion.main>
    </>
  );
};
