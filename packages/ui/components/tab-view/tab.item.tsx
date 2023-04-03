import * as React from "react";

type Props = {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

const TabItem: React.FC<Props> = ({ children, className, style }) => {
    return (
        <div style={style} className={className}>
            {children}
        </div>
    );
};

export default TabItem; 