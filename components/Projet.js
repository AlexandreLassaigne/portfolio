import styles from "../styles/Projet.module.css";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Link from "next/link";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

export default function Projet({
  image,
  title,
  description,
  technologies,
  lienGit,
  lienVercel,
  textButton,
}) {
  const [modal, setModal] = useState(false);
  const handleOpen = () => setModal(true);
  const handleClose = () => setModal(false);
  const [modalVideo, setModalVideo] = useState(false);
  const handleVideoOpen = () => setModalVideo(true);
  const handleVideoClose = () => setModalVideo(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 350,
    height: 500,
    bgcolor: "background.paper",
    border: "2px solid #000",
    p: 4,
    borderRadius: 10,
  };

  const styleVideo = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 350,
    height: 500,
    bgcolor: "background.paper",
    border: "2px solid #000",
    p: 4,
    borderRadius: 10,
  };

  return (
    <div className={styles.projet}>
      <Image
        src={image}
        width={250}
        height={250}
        className={styles.photos}
        onClick={handleOpen}
        alt={title}
        unoptimized
      />
      <Modal open={modal} onClose={handleClose}>
        <Box sx={style}>
          <Typography>
            <h2 className={styles.titleModal}>{title}</h2>
          </Typography>
          <Typography>
            <p className={styles.descriptionModal}>{description}</p>
            <p className={styles.descriptionModal}>
              <span style={{ fontWeight: "bold" }}>Technologies : </span>
              {technologies}
            </p>
            <div className={styles.liens}>
              <Link href={lienGit} target="_blank" className={styles.icon}>
                <FaGithub />
              </Link>
              {textButton === "En cours" ? (
                <p className={styles.enCours}>{textButton}</p>
              ) : textButton === "Mon projet" ? (
                <button className={styles.button} onClick={handleVideoOpen}>
                  {textButton}
                </button>
              ) : (
                <Link href={lienVercel} target="_blank">
                  <button className={styles.button}>{textButton}</button>
                </Link>
              )}
              {/* MODAL VIDÉO */}
              <Modal open={modalVideo} onClose={handleVideoClose}>
                <Box sx={styleVideo}>
                  <video width="100%" height="400px" controls autoPlay className={styles.video}>
                    <source src={lienVercel} type="video/mp4" />
                  </video>
                </Box>
              </Modal>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
