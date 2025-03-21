import styles from "../styles/Contact.module.css";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState("");
  const [messageEnvoye, setMessageenvoye] = useState("");
  const [wrongEmail, setWrongEmail] = useState(false);
  const [emptyFields, setEmptyFields] = useState(false);

  const EMAIL_REGEX =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleOnSubmit = (e) => {
    //empêche la page de se recharger lors de la soumission du formulaire
    e.preventDefault();
    if (!email || !nom || !prenom || !message) {
      setEmptyFields(true);
      setMessageError("Veuillez saisir tous les champs");
    } else {
      setEmptyFields(false);
      if (!EMAIL_REGEX.test(email)) {
        setWrongEmail(true);
        setMessageError("Veuillez saisir un email au bon format");
      } else {
        setWrongEmail(false);
      }
      if (!wrongEmail && !emptyFields) {
        //envoie le formulaire via l'API EmailJS, en utilisant les paramètres
        emailjs
          .sendForm(
            process.env.NEXT_PUBLIC_SERVICE_ID,
            process.env.NEXT_PUBLIC_TEMPLATE_ID,
            e.target,
            process.env.NEXT_PUBLIC_PUBLIC_KEY
          )
          .then(
            (result) => {
              alert("Message envoyé");
            },
            (error) => {
              alert("Désolé, il y a eu une erreur veuillez recommencer");
            }
          );
        setEmail("");
        setMessage("");
        setNom("");
        setPrenom("");
        setMessageError("");
        setMessageenvoye("Message envoyé");
        e.target.reset();
      }
    }
  };

  return (
    <div id="contact">
      <h1 className={styles.text}>Contactez moi</h1>
      <div className={styles.form}>
        <form className={styles.inputContainer} onSubmit={handleOnSubmit}>
          <div className={styles.nom}>
            <input
              type="text"
              placeholder="Nom"
              className={styles.input}
              onChange={(e) => setNom(e.target.value)}
              value={nom}
              name="nom"
              id="nom"
            />
            <input
              type="text"
              placeholder="Prénom"
              className={styles.input}
              onChange={(e) => setPrenom(e.target.value)}
              value={prenom}
              name="prenom"
              id="prenom"
            />
          </div>
          <div className={styles.coordonees}>
            <input
              type="email"
              placeholder="Email"
              className={styles.input}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              name="email"
              id="email"
            />
          </div>
          <div className={styles.message}>
            <textarea
              type="text"
              placeholder="Message"
              className={styles.projet}
              rows={8}
              cols={30}
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </div>
          <div className={styles.buttonContainer}>
            <div className={styles.messageError}>{messageError}</div>
            <div className={styles.messageEnvoye}>{messageEnvoye}</div>
            <button className={styles.button} type="submit">
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
