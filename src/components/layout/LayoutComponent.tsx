import React from "react";
import { iLayout } from "../common/types/layout";
import TopBarComponent from "../top-bar/topBar";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import SideBarComponent from "../sidebar/sidebar";
import { useState } from "react";

const LayoutComponent = ({children}: iLayout) => {

    const location = useLocation();
    const isNoneMobile = useMediaQuery('(min-width:600px');
    const [isOpen,setIsOpen] = useState(true);

    return(

        location.pathname === '/login' || location.pathname === '/register' ?
        (<>
            
            {children}
            </>
            ) : (
                <Box display={isNoneMobile? 'flex' : 'block'} width='100%' height='100%'>
                <SideBarComponent 
                isNoneMobile={isNoneMobile}
                drawerWigth='250'
                isOpen={isOpen}
                setIsOpen={setIsOpen}

                />
                <Box>
                <TopBarComponent/>
                {children}
                </Box>
                </Box>
            )
    
    )

}

export default LayoutComponent;