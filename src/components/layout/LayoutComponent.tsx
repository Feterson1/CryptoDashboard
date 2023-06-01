import TopBarComponent from "../top-bar/topBar";
import { Outlet, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import SideBarComponent from "../sidebar/sidebar";
import React, { useState } from "react";
import { useStyles } from "./styles";

const LayoutComponent: React.FC = (): JSX.Element => {

    const location = useLocation();
    const isNoneMobile = useMediaQuery('(min-width:760px');
    const [isOpen,setIsOpen] = useState(false);
    const classes = useStyles();

    return(

        location.pathname === '/login' || location.pathname === '/register' ?
        (<>
            <Outlet/>
          
            </>
            ) : (
                <Box display={isNoneMobile? 'flex' : 'block'} width='100%' height='100%' justifyContent={'space-between'}>
                <SideBarComponent 
                isNoneMobile={isNoneMobile}
                drawerWidth='250px'
                isOpen={isOpen}
                setIsOpen={setIsOpen}

                />
                <Box className ={classes.mainSection}>
                <TopBarComponent
                isNoneMobile={isNoneMobile}
                 isOpen={isOpen}
                 setIsOpen={setIsOpen}
                 />
                <Outlet/>
                
                </Box>
                </Box>
            )
    
    )

}

export default LayoutComponent;