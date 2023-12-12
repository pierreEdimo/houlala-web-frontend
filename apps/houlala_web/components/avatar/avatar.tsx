import Image, { StaticImageData } from "next/image";
import React from "react";
import { HoulalaAvatar, HoulalaThumbnail } from "ui";

type AvatarProps = {
  imageUrl: string | StaticImageData;
  type: string;
  index?: number
}

const Avatar: React.FC<AvatarProps> = ({ imageUrl, type, index }) => {
  switch (type) {
    case "thumbnail":
      return (
        <HoulalaThumbnail>
          <Image
            src={imageUrl} alt="category-image"
            layout="fill"
            objectFit="cover"
            priority={true}
            style={{ zIndex: index, borderRadius: "5px" }}
          />
        </HoulalaThumbnail>
      );
    case "avatar":
    default:
      return (
        <HoulalaAvatar>
          <Image
            src={imageUrl} alt="category-image"
            layout="fill"
            objectFit="cover"
            priority={true}
            style={{ borderRadius: "50%" }}
          />
        </HoulalaAvatar>
      );
  }

};

export default Avatar;