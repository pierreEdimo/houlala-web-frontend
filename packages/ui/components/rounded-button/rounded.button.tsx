import { CSSProperties, DOMAttributes, MouseEventHandler } from "react";
import styles from "./rounded.button.module.scss";

type Props = {
    children: React.ReactNode; 
    onClick?: MouseEventHandler<HTMLButtonElement>; 
    style?: CSSProperties
}

const RoundedButton: React.FC<Props> = ({ children, onClick, style }) => {
    return (
        <button type="button" style={style} onClick={onClick} className={styles.roundedButton}>
            {children}
        </button>
    )
}

export default RoundedButton; 