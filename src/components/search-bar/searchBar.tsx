import React, { useState } from 'react'
import {Stack,Autocomplete,TextField} from "@mui/material";

import { useAppSelector } from '../../utils/hook';
import { useNavigate } from 'react-router-dom';
import { iSingleAsset } from '../../common/types/assets';

const SearchBarComponent: React.FC = ():JSX.Element => {

  const [selectedItem,setSelectedItem] = useState<string | null>('');
  
    const navigate = useNavigate();
   

    const assetsArray: iSingleAsset[] = useAppSelector(
            
      (state) => state.assets.assets,
  )
    
  return (
        <Stack spacing={2} sx={{width: '300px'}}>
          <Autocomplete
          onChange={(e:any, value: string | null) => {
            navigate(`single/${value}`);
            setSelectedItem(null);
          }
           
          }
          value={selectedItem}
          renderInput={(element)=>(
            <TextField {...element} label='Поиск' inputProps={{
              ...element.inputProps,
              type: 'search',
            }}/>
          )} 
          options={assetsArray.map((element:{name:string})=> element.name)}/>
        </Stack>
  )
}


export default SearchBarComponent;
