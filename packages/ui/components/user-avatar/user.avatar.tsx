import styles from "./user.avatar.module.scss";
import * as React from "react";

export type Props = {
    firstName: string;
    lastName: string;
}

const UserAvatar: React.FC<Props> = ({ firstName, lastName }) => {
    const userName = Array.from(firstName)[0] + "." + Array.from(lastName)[0];
    return (
        <div className={styles.avatarContainer}>
            <p style={{ fontWeight: "bold", textTransform: "uppercase", fontSize: "33px" }}>{userName}</p>
        </div>
    )
}

export default UserAvatar; 