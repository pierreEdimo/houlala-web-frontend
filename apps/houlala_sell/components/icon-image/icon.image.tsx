import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {
  icon: StaticImageData;
  width: number;
  height: number;
}

const IconImage: React.FC<Props> = ({ icon, width, height }) => {
  return (
    <Image src={icon}
           width={width}
           height={height}
           alt={"icon-images"} />
  );
};

export default IconImage;