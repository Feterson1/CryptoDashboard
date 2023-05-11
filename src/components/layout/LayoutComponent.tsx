import TopBarComponent from "../top-bar/topBar";
import { Outlet, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import SideBarComponent from "../sidebar/sidebar";
import { useState } from "react";
import { useStyles } from "./styles";

const LayoutComponent = () => {

    const location = useLocation();
    const isNoneMobile = useMediaQuery('(min-width:600px');
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
                drawerWigth='250px'
                isOpen={isOpen}
                setIsOpen={setIsOpen}

                />
                <Box className ={classes.mainSection}>
                <TopBarComponent
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