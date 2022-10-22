import { ApiSlice } from './Features/apiSlice';
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        [ApiSlice.reducerPath]: ApiSlice.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(ApiSlice.middleware)
})