import React, { useEffect } from "react";
import { useStyles } from "./styles";
import {Box,Drawer,Divider,List,IconButton,ListItem,ListItemButton,ListItemIcon,ListItemText,Typography,useTheme} from '@mui/material';
import {HomeOutlined,ChevronLeftOutlined,ChevronRightOutlined,AutoGraphOutlined, MenuBookOutlined,SettingsOutlined ,LogoutOutlined } from '@mui/icons-material';
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import FlexBetween from "../flexBetween";






const SideBarComponent = (props:any) => {

    const  [active,setActive] = useState('');

    const {isNoneMobile,
        drawerWigth,
        isOpen,
        setIsOpen,} = props;
    

    const classes = useStyles();
    const {pathname} = useLocation();
    const navigate = useNavigate();
    const theme = useTheme();

    useEffect(()=>{
        setActive(pathname.substring(1))
    },[pathname])
   

    return( 
        <Box component={'nav'}>
            {isOpen && (
                <Drawer open={isOpen} onClose={()=>{setIsOpen(false)}} variant="persistent" anchor='left' 
                sx={{width:drawerWigth,
                '& .MuiDrawer-paper':{
                    color:theme.palette.secondary.main,
                    backgroundColor: theme.palette.primary.main,
                    boxSizing: 'border-box',
                    width:drawerWigth,
                }}}>
                    <Box width={'100%'}>
                        <Box>
                            <FlexBetween>
                                <Box display={'flex'} alignItems={'center'} gap={'10px'}>
                                    <Typography>Demo</Typography>
                                </Box>
                                {!isNoneMobile && (
                                    <IconButton onClick={()=>{setIsOpen(!isOpen)}}>
                                        <ChevronLeftOutlined/>
                                    </IconButton>
                                )}
                            </FlexBetween>
                        </Box>

                    </Box>
                </Drawer>
            ) }
        </Box>
    )
}

export default SideBarComponent;