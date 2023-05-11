import React, { useContext } from "react";
import { Box, Grid, IconButton,InputBase } from "@mui/material";
import { useAppSelector } from "../../utils/hook";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { useTheme } from "@mui/styles";
import { ColorModeContext } from "../../theme";
import { useStyles } from "./styles";

const TopBarComponent = () => {

const user = useAppSelector( (state) => state.auth.user);
const theme = useTheme();



const colorMode: any = useContext(ColorModeContext);

const classes = useStyles();


    return(
        <Box className={classes.root}>
            <Grid>Welcome Dima </Grid>
            <Box display='flex'>
                <Grid className={classes.iconBlock}>
                    <IconButton onClick={colorMode.toggleColorMode} className={classes.themeIcon}>
                        {theme.palette.mode === 'dark'? (<DarkModeIcon/>) : (<LightModeIcon/>) }
                    </IconButton>
                    <IconButton>
                        <NotificationsNoneIcon/>
                    </IconButton>
                </Grid>
                <Grid className={classes.searchBlock} >
                    <IconButton className={classes.searchIcon}>
                        <SearchIcon/>
                    </IconButton>
                    <InputBase className={classes.searchInput}  placeholder="Поиск"/>
                </Grid>
            </Box>
        </Box>
    )


}


export default TopBarComponent;