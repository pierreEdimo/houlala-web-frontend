import React from "react";

type ContainerProps = {
    children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({children}: { children: React.ReactNode }) => {
    return <>
        <div>
            {children}
        </div>
    </>
}

export default Container; 