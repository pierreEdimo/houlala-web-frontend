import * as React from "react"; 
import styles from "./outlined.button.module.scss"; 

type Props = {
    children: React.ReactNode; 
    style?: React.CSSProperties; 
    onClick?: React.MouseEventHandler<HTMLButtonElement>; 
}

const OutlinedButton:React.FC<Props> = ({children, style, onClick}) => {
    return (
        <button type="button" className={styles.outlinedButton} onClick={onClick} style={style}>
            {children}
        </button>
    )
}

export default OutlinedButton; 