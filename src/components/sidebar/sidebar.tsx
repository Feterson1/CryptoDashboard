import React, { useEffect } from "react";
import { useStyles } from "./styles";
import {Box,Drawer,Divider,List,IconButton,ListItem,ListItemButton,ListItemIcon,ListItemText,Typography,useTheme} from '@mui/material';
import {ChevronLeftOutlined,ChevronRightOutlined,LogoutOutlined } from '@mui/icons-material';
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import FlexBetween from "../flexBetween";
import { navMenu } from "../common/moks/navigate/navigate";
import { tokens } from "../../theme";
import logo from './../../assets/images/sidebar/logo.svg'
import { iSidebarProps } from "../common/types/sidebar";







const SideBarComponent: React.FC<iSidebarProps> = (props:iSidebarProps): JSX.Element => {

    const  [active,setActive] = useState('');

    const {isNoneMobile,
        drawerWidth,
        isOpen,
        setIsOpen,} = props;
    

    const classes = useStyles();
    const {pathname} = useLocation();
    const navigate = useNavigate();
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    useEffect(()=>{
        setActive(pathname)
    },[pathname])

    const renderNavMenu =  navMenu.map((element): JSX.Element=>{
        return(
            <ListItem key={element.id} className={classes.navItem}>
                <ListItemButton onClick={()=>{ navigate(`${element.path}`)}} className={active === element.path?  `${classes.navItem} ${classes.active}`  : classes.navItem}>
                    <ListItemIcon>
                        {element.icon}
                    </ListItemIcon>
                <ListItemText>
                    <Typography variant="body1">{element.name}</Typography>
                </ListItemText>
                </ListItemButton>
            </ListItem>
        )
    })
   

    return( 
        <Box component={'nav'}>
            {isOpen && (
                <Drawer open={isOpen} onClose={()=>{setIsOpen(false)}} variant="persistent" anchor='left' 
                sx={{width:drawerWidth,
                '& .MuiDrawer-paper':{
                    color:theme.palette.secondary.main,
                    backgroundColor: theme.palette.primary.main,
                    boxSizing: 'border-box',
                    width:drawerWidth,
                }}}>
                    <Box  className={classes.navBlock}>
                        <Box>
                            <FlexBetween>
                                <Box className={classes.brand}>
                                    <img src={logo} alt="logoImage"/>
                                    <Typography variant="h1">Demo</Typography>
                                </Box>
                                {!isNoneMobile && (
                                    <IconButton onClick={()=>{setIsOpen(!isOpen)}}>
                                        <ChevronLeftOutlined/>
                                    </IconButton>
                                )}
                            </FlexBetween>
                        </Box>
                        <List className={classes.navList} >
                           {renderNavMenu}
                        </List>

                    </Box>
                    <Box width='100%'>
                        <List>
                            <ListItem>
                                <ListItemButton className={classes.navItem}>
                                    <ListItemIcon>
                                    <LogoutOutlined/>
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography>Logout</Typography>
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                        </List>

                    </Box>
                </Drawer>
            ) }
        </Box>
    )
}

export default SideBarComponent;