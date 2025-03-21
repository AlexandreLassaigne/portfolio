"use client";
import styles from "../styles/Apropos.module.css";
import Image from "next/image";
import { Popover, Whisper } from "rsuite";
import "rsuite/dist/rsuite.min.css";

export default function Apropos() {
  return (
    <div className={styles.about} id="apropos">
      <h1 className={styles.text}>A propos</h1>
      <div className={styles.container}>
        <Image
          src="/portrait.jpg"
          height={400}
          width={400}
          className={styles.image}
        />
        <div className={styles.presentationTexte}>
          <p>
            Je m'appelle Alexandre Lassaigne, j'ai 29 ans et je viens de me
            reconvertir dans le développement web et mobile. Récemment diplômé
            en tant que Concepteur Développeur d'Applications Web & Mobiles à La
            Capsule, j'ai été passionné par cette formation et par les
            opportunités qu'offre ce métier. Motivé par l'envie d'appliquer mes
            compétences et de continuer à apprendre, j'ai acquis une solide
            expérience en React, React Native et Express.js à travers des
            projets concrets, réalisés en équipe. Curieux et persévérant, je
            suis aujourd’hui à la recherche de mon premier poste pour mettre à
            profit mes connaissances et contribuer activement au développement
            d’applications innovantes.
          </p>
        </div>
      </div>
      <div className={styles.containerStack}>
        <div className={styles.stack}>
          <div>
            <h3 className={styles.title}>Back-End</h3>
            <div className={styles.logo}>
              <Whisper
                placement="top"
                trigger="hover"
                followCursor
                speaker={<Popover className={styles.popover}>Node.js</Popover>}
              >
                <Image
                  src="/nodejs-logo.svg"
                  width={60}
                  height={50}
                  alt="Node.js Logo"
                />
              </Whisper>
              <Whisper
                placement="top"
                trigger="hover"
                followCursor
                speaker={
                  <Popover className={styles.popover}>Express.js</Popover>
                }
              >
                <Image
                  src="/express-logo.png"
                  width={60}
                  height={50}
                  alt="Express.js Logo"
                />
              </Whisper>
            </div>
          </div>
          <div>
            <h3 className={styles.title}>Front-End</h3>
            <div className={styles.logo}>
              <Whisper
                placement="top"
                trigger="hover"
                followCursor
                speaker={<Popover className={styles.popover}>HTML</Popover>}
              >
                <Image
                  src="/html-logo.webp"
                  width={50}
                  height={50}
                  alt="HTML Logo"
                />
              </Whisper>
              <Whisper
                placement="top"
                trigger="hover"
                followCursor
                speaker={<Popover className={styles.popover}>CSS</Popover>}
              >
                <Image
                  src="/css3-logo.png"
                  width={40}
                  height={50}
                  alt="CSS Logo"
                />
              </Whisper>
              <Whisper
                placement="top"
                trigger="hover"
                followCursor
                speaker={
                  <Popover className={styles.popover}>JavaScript</Popover>
                }
              >
                <Image
                  src="/javascript-logo.png"
                  width={60}
                  height={60}
                  alt="JavaScript Logo"
                />
              </Whisper>
              <Whisper
                placement="top"
                trigger="hover"
                followCursor
                speaker={<Popover className={styles.popover}>React</Popover>}
              >
                <Image
                  src="/react-logo.png"
                  width={50}
                  height={50}
                  alt="React Logo"
                />
              </Whisper>
              <Whisper
                placement="top"
                trigger="hover"
                followCursor
                speaker={
                  <Popover className={styles.popover}>React Native</Popover>
                }
              >
                <Image
                  src="/react-native-logo.svg"
                  width={50}
                  height={50}
                  alt="React Native Logo"
                />
              </Whisper>
              <Whisper
                placement="top"
                trigger="hover"
                followCursor
                speaker={<Popover className={styles.popover}>Redux</Popover>}
              >
                <Image
                  src="/redux-logo.svg"
                  width={60}
                  height={50}
                  alt="Redux Logo"
                />
              </Whisper>
            </div>
          </div>
          <div>
            <h3 className={styles.title}>Base De Données</h3>
            <div className={styles.logo}>
              <Whisper
                placement="top"
                trigger="hover"
                followCursor
                speaker={<Popover className={styles.popover}>MongoDB</Popover>}
              >
                <Image
                  src="/mongodb-logo.png"
                  width={50}
                  height={50}
                  alt="MongoDB Logo"
                />
              </Whisper>
            </div>
          </div>
          <div>
            <h3 className={styles.title}>Développement</h3>
            <div className={styles.logo}>
              <Whisper
                placement="top"
                trigger="hover"
                followCursor
                speaker={<Popover className={styles.popover}>GitHub</Popover>}
              >
                <Image
                  src="/github-logo.png"
                  width={50}
                  height={50}
                  alt="GitHub Logo"
                />
              </Whisper>
            </div>
          </div>
          <div>
            <h3 className={styles.title}>Déploiement</h3>
            <div className={styles.logo}>
              <Whisper
                placement="top"
                trigger="hover"
                followCursor
                speaker={<Popover className={styles.popover}>Vercel</Popover>}
              >
                <Image
                  src="/vercel-logo.svg"
                  width={50}
                  height={50}
                  alt="Vercel Logo"
                />
              </Whisper>
              <Whisper
                placement="top"
                trigger="hover"
                followCursor
                speaker={<Popover className={styles.popover}>Expo</Popover>}
              >
                <Image
                  src="/expo-logo.svg"
                  width={50}
                  height={50}
                  alt="Expo Logo"
                />
              </Whisper>
            </div>
          </div>
          <div>
            <h3 className={styles.title}>Interface Utilisateur</h3>
            <div className={styles.logo}>
              <Whisper
                placement="top"
                trigger="hover"
                followCursor
                speaker={<Popover className={styles.popover}>Figma</Popover>}
              >
                <Image
                  src="/figma-logo.svg"
                  width={50}
                  height={50}
                  alt="Figma Logo"
                />
              </Whisper>
              <Whisper
                placement="top"
                trigger="hover"
                followCursor
                speaker={<Popover className={styles.popover}>Miro</Popover>}
              >
                <Image
                  src="/miro-logo.svg"
                  width={50}
                  height={50}
                  alt="Miro Logo"
                />
              </Whisper>
              <Whisper
                placement="top"
                trigger="hover"
                followCursor
                speaker={
                  <Popover className={styles.popover}>Whimsical</Popover>
                }
              >
                <Image
                  src="/whimsical-logo.png"
                  width={80}
                  height={80}
                  alt="Whimsical Logo"
                />
              </Whisper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
