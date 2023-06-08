import React from "react";
import AssetsTableComponent from "../assets-table/assetsTable";
import { iTablePriceData } from "../../common/types/assets";



const TopPriceComponent: React.FC<iTablePriceData> = (props: iTablePriceData): JSX.Element => {

  const {assets} = props;

 

    return ( 
        <AssetsTableComponent assets = {assets}/>
    )
}


export default TopPriceComponent;