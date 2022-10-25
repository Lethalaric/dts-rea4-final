import { configureStore } from "@reduxjs/toolkit";

import { ApiSlice } from './Features/apiSlice';
import keywordReducer from './Features/keyword/keywordSlice';

export const store = configureStore({
    reducer: {
        [ApiSlice.reducerPath]: ApiSlice.reducer,
        keyword : keywordReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(ApiSlice.middleware)
})