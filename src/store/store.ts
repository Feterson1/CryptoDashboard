import { configureStore } from "@reduxjs/toolkit";
import  authSlice  from "./slice/auth/auth";
import  assetSlice  from "./slice/assets";
import  watchListSlice  from "./slice/watchlist/watchlist";
import newsSlice from "./slice/news/news";

const store = configureStore({
    reducer: {
        auth: authSlice,
        assets: assetSlice,
        watchList: watchListSlice,
        news : newsSlice,
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;