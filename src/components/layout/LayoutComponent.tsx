import TopBarComponent from "../top-bar/topBar";
import { Outlet, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import SideBarComponent from "../sidebar/sidebar";
import React, { useEffect, useState } from "react";
import { useStyles } from "./styles";
import { useAppDispatch } from "../../utils/hook";
import { getPublicUserInfo } from "../../store/thunks/auth/auth";

const LayoutComponent: React.FC = (): JSX.Element => {

    const location = useLocation();
    const dispatch = useAppDispatch();
    const isNoneMobile = useMediaQuery('(min-width:760px');
    const [isOpen,setIsOpen] = useState(true);
    const classes = useStyles();


    useEffect(()=>{
        dispatch(getPublicUserInfo())
    },[dispatch]);

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