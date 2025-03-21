import styles from "../styles/Projets.module.css";
import Projet from "./Projet";
import projets from '../utils/projets'

export default function Projets() {

  const carte = projets.map((data, i) => {
    console.log(data.image)
    return(
      <Projet
      key={i}
      image={data.image}
      title={data.title}
      description={data.description}
      technologies={data.technologies}
      lienGit={data.lienGit}
      lienVercel={data.lienVercel}
      textButton={data.textButton}
      />
    )
  })

  

  return (
    <div id="projet">
      <h1 className={styles.text}>Mes projets</h1>
      <div className={styles.projets}>
        {carte}
      </div>
    </div>
  );
}
