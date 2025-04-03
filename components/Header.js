import styles from "../styles/Header.module.css";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Header() {
  return (
    <div>
      <div className={styles.header}>
        <div>
          <Link href="#apropos" className={styles.lien}>
            A propos
          </Link>
          <Link href="#projet" className={styles.lien}>
            Projets
          </Link>
          <Link href="#contact" className={styles.lien}>
            Contact
          </Link>
        </div>
        <div className={styles.logo}>
          <Link
            href="https://www.linkedin.com/in/alexandre-lassaigne-647593a6/"
            target="_blank"
            className={styles.icon}
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://github.com/AlexandreLassaigne?tab=repositories"
            target="_blank"
            className={styles.icon}
          >
            <FaGithub />
          </Link>
        </div>
      </div>
    </div>
  );
}
