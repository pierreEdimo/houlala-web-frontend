import * as React from "react";
import "./houlala.button.scss";

type Props = {
  children: React.ReactNode;
  type: any;
  className: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  style?: React.CSSProperties
};

const HoulalaButton: React.FC<Props> = ({
                                          children,
                                          type, className,
                                          onClick,
                                          style
                                        }) => {
  return (
    <button style={style}
            onClick={onClick}
            type={type}
            className={className}>
      {children}
    </button>);
};

export default HoulalaButton;
