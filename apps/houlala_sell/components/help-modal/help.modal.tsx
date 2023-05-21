import { HoulalaCard, HoulalaButton, Modal } from "ui";
import { ModalIsEnum } from "../../types/modal.ids";
import styles from "./help.modal.module.scss";
import { Help } from "../../types/help";
import { useState } from "react";
import EmailService from "../../service/email.service";

const HelpModal = () => {
  const [message, setErrorMessage] = useState<string>();
  const emailService = new EmailService();
  const EMAIL_URL = process.env.NEXT_PUBLIC_EMAIL_URL;
  const closeModal = () => {
    const modal = document.getElementById(ModalIsEnum.help);
    modal!.style.display = "none";
  };

  const sendHelpEmail = async (event: any) => {
    event.preventDefault();
    const data: Help = {
      name: event.target.name.value,
      email: event.target.email.value,
      phoneNumber: event.target.phoneNumber.value,
      subject: event.target.topic.value,
      message: event.target.issue.value,
      to: "pierredimo@live.com",
    };
    const response = await emailService.sendEmail(`${EMAIL_URL}/help`, data);

    if (response.status === 200) {
      event.target.reset();
      closeModal();
    }

    if (response.status !== 200) {
      setErrorMessage(
        "Une erreur est survenue pendant l'envoie de votre E-mail" +
          "Veuillez reessayer plutard. Si le probleme persiste, contactez nous au 0023799917462"
      );
      return;
    }
  };

  return (
    <Modal modalId={ModalIsEnum.help}>
      <HoulalaCard style={{ padding: "1rem", background: "white" }}>
        <form onSubmit={sendHelpEmail} className={styles.helpForm}>
          <div>
            {message ? (
              <div className={styles.errorMessage}>{message}</div>
            ) : (
              <div></div>
            )}
          </div>
          <div>
            <h3>Avez besoin d'aide?</h3>
            <p style={{ fontSize: "14px", color: "grey" }}>
              Remplissez le formulaire de contact
            </p>
            <p style={{ fontSize: "13px", color: "grey" }}>
              Nous prendrons contact avec vous.
            </p>
          </div>
          <input type={"text"} placeholder={"Nom"} name={"name"} required />
          <input
            type={"email"}
            placeholder={"E-mail"}
            name={"email"}
            required
          />
          <input
            type={"number"}
            placeholder={"Numero de telephone"}
            name={"phoneNumber"}
            required
          />
          <input type={"text"} placeholder={"Sujet"} name={"topic"} required />
          <textarea
            placeholder={"Decrivez votre probleme"}
            name={"issue"}
            required
          ></textarea>
          <div className={styles.helpModalFooter}>
            <HoulalaButton
              type={"button"}
              className={"outlined"}
              onClick={closeModal}
            >
              Annuler
            </HoulalaButton>
            <HoulalaButton type={"submit"} className={"filled"}>
              Envoyez
            </HoulalaButton>
          </div>
        </form>
      </HoulalaCard>
    </Modal>
  );
};

export default HelpModal;
