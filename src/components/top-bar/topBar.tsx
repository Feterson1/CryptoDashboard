import React, { useContext } from "react";
import { AppBar, Box, Grid, IconButton,InputBase, Menu, Toolbar, Typography } from "@mui/material";
import { useAppSelector } from "../../utils/hook";
import {LightMode,DarkMode,Search,NotificationsNone,MenuOutlined} from '@mui/icons-material';
import { useTheme } from "@mui/styles";
import { ColorModeContext } from "../../theme";
import { useStyles } from "./styles";
import FlexBetween from "../flexBetween";

const TopBarComponent = (props:any) => {

    const {isOpen,setIsOpen} = props;

const user = useAppSelector( (state) => state.auth.user);
const theme = useTheme();



const colorMode: any = useContext(ColorModeContext);

const classes = useStyles();


    return(

        <AppBar className={classes.root} position="static">
            <Toolbar className={classes.toolbar}>
            <FlexBetween>
                <MenuOutlined className={classes.menuIcon} onClick={() => {setIsOpen(!isOpen)}}/>
                <Typography variant="h3">
                    Welcome Dmitriy
                </Typography>
            </FlexBetween>
            <Box display='flex'>
               <Grid className={classes.iconBlock}>
                    <IconButton onClick={colorMode.toggleColorMode} className={classes.themeIcon}>
                       {theme.palette.mode === 'dark'? (<DarkMode/>) : (<LightMode/>) }
                    </IconButton>
                    <IconButton>
                        <NotificationsNone/>
                   </IconButton>
                </Grid>
                <Grid className={classes.searchBlock} >
                     <IconButton className={classes.searchIcon}>
                     <Search/>
                 </IconButton>
                     <InputBase className={classes.searchInput}  placeholder="Поиск"/>
                 </Grid>
             </Box>

            </Toolbar>
        </AppBar>


        // <Box className={classes.root} sx={{flexGrow:1}}>
        //     <Grid>Welcome Dima </Grid>
        //     <Box display='flex'>
        //         <Grid className={classes.iconBlock}>
        //             <IconButton onClick={colorMode.toggleColorMode} className={classes.themeIcon}>
        //                 {theme.palette.mode === 'dark'? (<DarkModeIcon/>) : (<LightModeIcon/>) }
        //             </IconButton>
        //             <IconButton>
        //                 <NotificationsNoneIcon/>
        //             </IconButton>
        //         </Grid>
        //         <Grid className={classes.searchBlock} >
        //             <IconButton className={classes.searchIcon}>
        //                 <SearchIcon/>
        //             </IconButton>
        //             <InputBase className={classes.searchInput}  placeholder="Поиск"/>
        //         </Grid>
        //     </Box>
        // </Box>
    )


}


export default TopBarComponent;