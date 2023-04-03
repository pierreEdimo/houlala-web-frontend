import * as React from "react";
import { ReactDOM } from "react";
import "./tab.module.scss"; 


type Props = {
    children: Array<React.ReactNode>
    currentIndex?: number
}

const TabBody:React.FC<Props> = ({children, currentIndex}) => {
    return (
        <div className={"mainBody"}>
            {children[currentIndex!]}
        </div>
    )
}

export default TabBody