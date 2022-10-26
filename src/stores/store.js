import { configureStore } from "@reduxjs/toolkit";

import { apiSlice } from './Features/api/apiSlice';
import keywordReducer from './Features/keyword/keywordSlice';
import storyReducer from './Features/story/storySlice'

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        keyword : keywordReducer,
        story: storyReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
})