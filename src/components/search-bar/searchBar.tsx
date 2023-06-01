import React from 'react'
import {Stack,Autocomplete,TextField} from "@mui/material";
import { iSingleAsset } from '../common/types/assets';
import { useAppSelector } from '../../utils/hook';

 function SearchBarComponent() {
   

    const assetsArray: iSingleAsset[] = useAppSelector(
            
      (state) => state.assets.assets,
  )

  return (
        <Stack spacing={2} sx={{width: '300px'}}>
          <Autocomplete 
          freeSolo
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
