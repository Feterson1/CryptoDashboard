import React, { useEffect } from "react";
import { useStyles } from "./styles";
import {
    Box,
    Drawer,
    List,
    IconButton,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    useTheme} from '@mui/material';
import {ChevronLeftOutlined,LogoutOutlined } from '@mui/icons-material';
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import FlexBetween from "../flexBetween";
import logo from './../../assets/images/sidebar/logo.svg'
import ThemeSwitcherComponent from "../theme-switcher/themeSwitcher";
import SearchBarComponent from "../search-bar/searchBar";
import { iSidebarProps } from "../../common/types/sidebar";
import { navMenu } from "../../common/moks/navigate/navigate";







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
   

    useEffect(()=>{
        setActive(pathname)
    },[pathname])

    const handleLogout = () => {

        sessionStorage.removeItem('name');
        sessionStorage.removeItem('token');
        navigate('/login');

    }

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
                        <List>
                            {!isNoneMobile && (
                            <ListItem>
                                <SearchBarComponent/>
                            </ListItem> )}
                        </List>
                        <List className={classes.navList} >
                           {renderNavMenu}
                        </List>

                    </Box>
                    <Box width='100%'>
                        <List>
                            {!isNoneMobile && (
                                <ListItem>
                                    <Box padding='5px'>
                                    <ThemeSwitcherComponent/>
                                    </Box>
                                </ListItem>
                            )}
                            <ListItem>
                                <ListItemButton 
                                className={classes.navItem}
                                onClick={handleLogout}
                                >
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