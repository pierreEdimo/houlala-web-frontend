import * as React from "react";
import { HoulalaCard, Modal } from "ui";
import { ModalIsEnum } from "../../types/modal.ids";
import styles from "./create.modal.module.scss";

const CreateLocationModal = () => {
    const closeModal = () => {
        document.getElementById(ModalIsEnum.createLocationModal)!.style.display = "none";
    }
    return (
        <Modal modalId={ModalIsEnum.createLocationModal}>
            <HoulalaCard style={{ width: "400px", background: "white", padding: "1rem" }}>
                <div>
                    <h2>Bienvenu sur houla la</h2>
                    <br />
                    <p>Nous vous remercions de votre interet pour notre projet.
                        <br />
                        <br />
                        Afin de creer son magasin sur Houla la, vous devez prendre contact
                        avec notre service client afin que celui-ci puisse vous faciliter la tache.<br />
                        Nous vous remercions de votre comprehension et de votre patience, et nous travaillons d'arache pied
                        afin d'ameliorer l'experience utilisateur Houlala. <br />
                    </p>
                    <br />
                    <p>
                        Notre numero:<br /> <a href="tel:+237697590470">+237 6 97 59 04 70</a>
                    </p>
                    <p>
                        Notre adresse E-mail:<br /> <a href="mailto:pierredimo@houlala.store">service@houlala.com</a>
                    </p>
                </div>
                <br />
                <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                    <button type="button" onClick={closeModal} className={styles.validateButton}>
                        Ok
                    </button>
                </div>
            </HoulalaCard>
        </Modal>
    )
}

export default CreateLocationModal; 