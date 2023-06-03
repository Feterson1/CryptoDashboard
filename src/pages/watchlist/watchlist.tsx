import react, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/hook';
import { getWatchlistElements } from '../../store/thunks/watchlist/watchlist';
import { getTopPriceData } from '../../store/thunks/assets';
import AssetsTableComponent from '../../components/assets-table/assetsTable';
import { Grid, Typography } from '@mui/material';
import { useStyles } from './styles';



const WatchListComponent = () =>{
    const WatchList = useAppSelector((state) => state.watchList.assets);
    const dispatch = useAppDispatch();
    const {assets} = useAppSelector(state => state.assets);

    const classes = useStyles();

    console.log(assets)

    useEffect(()=>{
        dispatch(getTopPriceData());
        dispatch(getWatchlistElements());
    },[dispatch]);


   const filteredArray = assets.filter((element: any)  => {
    return WatchList.some((otherElement: any )=> {
        return otherElement.assetId === element.id;
    })

    })

    return(
        <Grid className={classes.root}>
            <Grid className={classes.watchlistHeading}>
                <Typography 
                variant='h2'
                className={classes.heading}>
                    Избранное
                </Typography>

            </Grid>
            <Grid className={classes.assetsTableBlock}>
            <AssetsTableComponent assets = {filteredArray}/>
            </Grid>
        </Grid>
       
    )
}

export default WatchListComponent;