import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../utils/hook";
import { getFavoriteAssets, getTopPriceData } from "../../store/thunks/assets";
import { Grid, Box } from "@mui/material";
import { useStyles } from "./styles";
import AreaChart from "../../components/charts/area-chart/areaChart";
import TrendUp from '../../assets/images/chart/trend-up.svg';
import TrendDown from '../../assets/images/chart/trend-down.svg';
import  LineChart  from "../../components/charts/line-chart/lineChart";
import TopPriceComponent from "../../components/top-price/topPrice";
import { iChartData, iSingleAsset } from "../../common/types/assets";




const Home: React.FC = (): JSX.Element =>{
    
    const favoriteAssets: iChartData[] = useAppSelector(
        (state) => state.assets.favoriteAssets);
       
        const assetsArray: iSingleAsset[] = useAppSelector(
            
            (state) => state.assets.assets,
        )


   

    const classes = useStyles();

    const dispatch = useAppDispatch();
    const fetchDataRef = useRef(false);

    const favoriteAssetName = useMemo(() => ['bitcoin', 'ethereum'], [])

    const filteredArray = useMemo(()=>{
        return favoriteAssets.filter((value,index,self) => index === self.findIndex((t)=> t.name === value.name));
    },[favoriteAssets])

    const filteredAssetArray = assetsArray
    .slice()
    .sort((a,b) => a.current_price - b.current_price);
   

    const fetchData = useCallback((data:string[]) =>{
        
        data.forEach((element: string) =>{

                
            dispatch(getFavoriteAssets(element));

        }
        )

    },[dispatch]);



    useEffect(()=>{
        if(fetchDataRef.current === true) return

        fetchDataRef.current = true;
        fetchData(favoriteAssetName);
       

        dispatch(getTopPriceData())
        


    },[favoriteAssetName,fetchData,dispatch])

    const renderFavoriteBlock = filteredArray.map((element: iChartData)=>{

        let currentPrice = 0;
        let changePrice = 0;

        element.singleAsset.forEach((element: iSingleAsset)=>{
            currentPrice = element.current_price;
            changePrice = element.price_change_percentage_24h;
        })
        return (

            <Grid item  xs={12} sm={6} lg={6} key={element.name}>
                 <Grid container className={classes.topCardItem}>

                 <Grid item xs={12} sm={6} lg={6}>
                    <h3 className={classes.assetName}>{element.name}</h3>

                    <div className={classes.itemDetails}>
                        <h3 className={classes.cardPrice}>

                            ${currentPrice}

                            </h3>
                        <Box className={changePrice > 0 
                        ? `${classes.priceTrend} ${classes.trendUp}`
                        :`${classes.priceTrend} ${classes.trendDown}`
                        
                    
                    }>
                            {
                                changePrice > 0 ?
                                (<img src={TrendUp} alt="TrendUp"/>) 
                                : 
                                (<img src={TrendDown} alt="TrendDown"/>)
                            }

                           <span>{Number(changePrice).toFixed(1)}%</span> 

                            </Box>
                    </div>
                    

                </Grid>

                <Grid item xs={12} sm={6} lg={6}>
                  <AreaChart data={element.price_chart_data}/>
                </Grid>
            
            </Grid>
            </Grid>
           
        )
    })

    return (
        <Box className={classes.root}> 

            <Grid container spacing={2} className={classes.areaChart}>
                {renderFavoriteBlock}
            </Grid>
            <Grid container className={classes.lineChartBlock}>
                <Grid item xs={12} sm={12} lg={12}>
                   {filteredArray.length && <LineChart data={filteredArray}/>} 
                </Grid>
            </Grid>

            <Grid container className={classes.topPriceRoot}>
            <Grid item xs={12} sm={12} lg={12}>
                   {filteredAssetArray.length && <TopPriceComponent assets={filteredAssetArray.slice(94,100)}/>}
                </Grid>

            </Grid>
           

        </Box>
           

        
    )
}

export  default Home;