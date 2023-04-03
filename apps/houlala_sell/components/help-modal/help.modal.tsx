import { BorderedCard, Modal, OutlinedButton, SubmitButton } from "ui"
import { ModalIsEnum } from "../../types/modal.ids";
import styles from "./help.modal.module.scss"

const HelpModal = () => {
    const closeModal = () => {
        const modal = document.getElementById(ModalIsEnum.help);
        modal!.style.display = "none";  
    }

    return (
        <Modal modalId={ModalIsEnum.help}>
            <BorderedCard style={{ padding: "1rem", background: "white" }}>
                <form className={styles.helpForm}>
                    <div>
                        <h3>Avez besoin d'aide?</h3>
                        <p style={{ fontSize: "14px", color: "grey" }}>Remplissez le formulaire de contact</p>
                        <p style={{ fontSize: "13px", color: "grey" }}>Nous prendrons contact avec vous.</p>
                    </div>
                    <input
                        type={"text"}
                        placeholder={"Nom"}
                        name={'name'}
                        required
                    />
                    <input
                        type={"email"}
                        placeholder={"E-mail"}
                        name={'email'}
                        required />
                    <input
                        type={"number"}
                        placeholder={"Numero de telephone"}
                        name={'phoneNumber'}
                        required
                    />
                    <input
                        type={"text"}
                        placeholder={"Sujet"}
                        name={'topic'}
                        required
                    />
                    <textarea
                        placeholder={'Decrivez votre probleme'}
                        name={"issue"}>
                    </textarea>
                    <div className={styles.helpModalFooter}>
                        <OutlinedButton onClick={closeModal}>
                            Annuler
                        </OutlinedButton>
                        <SubmitButton>
                            Envoyez
                        </SubmitButton>
                    </div>
                </form>
            </BorderedCard>
        </Modal>
    )
}

export default HelpModal; 