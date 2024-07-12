import styles from './styles.module.css'
import { motion } from 'framer-motion'
import { GowButton } from '../../StyledComponents'

export const History = () => {
  return (
    <>
        <div className={styles.imgAtreus}>
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 50 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.5,
                ease: [0, 0.71, 0.2, 1.01],
                delay: 0.5,
              }}
            ></motion.div>
          </div>
          <div className={styles.imgKratos}>
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.5,
                ease: [0, 0.71, 0.2, 1.01],
                delay: 0.5,
              }}
            ></motion.div>
          </div>
          <div className={styles.titleH}>história</div>
          <div className={styles.contentH}>
            <motion.div initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.5,
                  ease: [0, 0.71, 0.2, 1.01],
                  delay: 1.5,
                }} className={styles.trailer}>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/FyIwEFXOcaE?si=BpJiYwOTDWJzA0E2"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </motion.div>
            <div className={styles.text}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.5,
                  ease: [0, 0.71, 0.2, 1.01],
                  delay: 1,
                }}
                className={styles.innerText}
              >
                <div className={styles.sinopse}>
                  Pela primeira vez na série, há dois protagonistas principais:
                  Kratos, o antigo deus da guerra grego que é acompanhado por
                  seu jovem filho Atreus. Após a morte da segunda esposa de
                  Kratos e mãe de Atreus, eles viajam para cumprir sua promessa
                  de espalhar suas cinzas no pico mais alto dos nove reinos.
                  Kratos mantém seu passado conturbado em segredo de Atreus, que
                  não tem consciência de sua natureza divina. Ao longo da
                  jornada, eles encontram monstros e deuses do mundo nórdico.
                </div>
                <div className={styles.btn}>
                  <GowButton type="button">Ver Mais</GowButton>
                </div>
              </motion.div>
            </div>
          </div>
    </>
  )
}