import React from "react";
import { iLayout } from "../common/types/layout";
import TopBarComponent from "../top-bar/topBar";

const LayoutComponent = ({children}: iLayout) => {
    return(
       <>
       <TopBarComponent/>
       {children}
       </>
    )

}

export default LayoutComponent;