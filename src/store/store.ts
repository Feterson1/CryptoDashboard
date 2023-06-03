import { configureStore } from "@reduxjs/toolkit";
import  authSlice  from "./slice/auth/auth";
import  assetSlice  from "./slice/assets";
import  watchListSlice  from "./slice/watchlist/watchlist";

const store = configureStore({
    reducer: {
        auth: authSlice,
        assets: assetSlice,
        watchList: watchListSlice,
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;