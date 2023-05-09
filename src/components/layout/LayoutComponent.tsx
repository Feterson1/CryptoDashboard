import React from "react";
import { iLayout } from "../common/types/layout";
import TopBarComponent from "../top-bar/topBar";
import { useLocation } from "react-router-dom";

const LayoutComponent = ({children}: iLayout) => {

    const location = useLocation();

    return(

        location.pathname === '/login' || location.pathname === '/register' ?
        (<>
            
            {children}
            </>
            ) : (
                <>
                <TopBarComponent/>
                {children}
                </>
            )
    
    )

}

export default LayoutComponent;