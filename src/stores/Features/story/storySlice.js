import {createSlice} from "@reduxjs/toolkit";

const initialState = []

const storySlice = createSlice({
    name: 'story',
    initialState,
    reducers: {
        addStory(state, action) {
            state.push(action.payload)
        },
        deleteStory(state, action) {
            const removedIndex = state.findIndex(data => data.uuid === action.payload.uuid)
            state.splice(removedIndex, 1)
        },
        editStory(state, action) {
            const editedIndex = state.findIndex(data => data.uuid === action.payload.uuid)
            state[editedIndex] = action.payload
        }
    }
})

export const {addStory, deleteStory, editStory} = storySlice.actions
export default storySlice.reducer