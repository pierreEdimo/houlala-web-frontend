import Image, { StaticImageData } from "next/image";
import * as React from "react";

type Props = {
    src: StaticImageData | string;
    style?: React.CSSProperties
}

const IconImage: React.FC<Props> = ({ src, style }) => {
    return <Image
        style={style}
        src={src}
        alt={'icon-image'}
        width={15}
        height={15} />
}

export default IconImage; 