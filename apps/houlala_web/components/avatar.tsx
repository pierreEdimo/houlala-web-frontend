import Image, {StaticImageData} from "next/image";
import avatarStyles from "../styles/avatar.module.scss";
import React from "react";

type AvatarProps = {
    imageUrl: string | StaticImageData;
    type: string;
    index?: number
}

const Avatar: React.FC<AvatarProps> = ({imageUrl, type, index}) => {
    switch (type) {
        case "thumbnail":
            return (
                <div className={avatarStyles.avatarContainer}>
                    <Image className={avatarStyles.thumbnail}
                           src={imageUrl} alt="category-image"
                           layout="fill"
                           objectFit="cover"
                           priority={true}
                           style={{zIndex: index}}
                    />
                </div>
            )
        case "avatar":
        default:
            return (
                <div className={avatarStyles.avatarContainer}>
                    <Image className={avatarStyles.avatar}
                           src={imageUrl} alt="category-image"
                           layout="fill"
                           objectFit="cover"
                           priority={true}
                    />
                </div>
            )
    }

}

export default Avatar;