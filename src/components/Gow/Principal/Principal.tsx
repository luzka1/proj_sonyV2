import styles from "./styles.module.css";
import logo2 from "../../../images/logo-gow2.png";
import { motion } from "framer-motion";
import { itemHeader, itens } from "../../../themes";
import { GowButton } from "../../StyledComponents";

export const Principal = () => {
  return (
    <div className={styles.content_principal}>
      <div className={styles.header}>
        <motion.div
          className={styles.inner_header}
          variants={itemHeader}
          initial="hidden"
          animate="visible"
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 100,
            delay: 2,
          }}
        >
          <div>HOME</div>
          <div>
            <img src={logo2} alt="logo gow" />
          </div>
          <GowButton>ORDER</GowButton>
        </motion.div>
      </div>

      <div className={styles.title_area}>
        <div className={styles.inner_title}>
          <motion.div
            className={styles.title}
            variants={itens}
            initial="hidden"
            animate="visible"
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 100,
              delay: 2,
            }}
          >
            Retornando a jornada
          </motion.div>
          <div className={styles.simple_text}>
            <motion.div
              variants={itemHeader}
              initial="hidden"
              animate="visible"
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 100,
                delay: 2.2,
              }}
              className={styles.left}
            >
              Ao contrário dos jogos anteriores, que eram vagamente baseados na
              mitologia grega, este título é vagamente baseado na mitologia
              nórdica.
            </motion.div>
            <motion.div
              variants={itemHeader}
              initial="hidden"
              animate="visible"
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 200,
                delay: 2.5,
              }}
              className={styles.right}
            >
              <p>Nova Historia</p>
              <p>Nova Motilogia</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
