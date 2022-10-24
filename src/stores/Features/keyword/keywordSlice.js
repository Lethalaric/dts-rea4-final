import { createSlice } from "@reduxjs/toolkit"

const initialState = { keyword: '' };

const keywordSlice = createSlice({
	name: 'keyword',
	initialState,
	reducers: {
		changeKeyword(state, action) {
			state.keyword = action.payload;
		},
		resetKeyword(state,action) {
			state.keyword = '';
		},
	}
});

export const { changeKeyword, resetKeyword } = keywordSlice.actions;
export default keywordSlice.reducer;