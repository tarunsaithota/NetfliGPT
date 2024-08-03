import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
    name: 'GPT',
    initialState: {
        showGPTSearch: false,
        showMovies: null,
        showMovieNames: null
    },
    reducers: {
        toggleGPTSearch: (state) => {
            state.showGPTSearch = !state.showGPTSearch;
        },
        addGPTMovieList: (state, action) => {
            const{showMovies, showMovieNames} = action.payload;
            state.showMovies = showMovies;
            state.showMovieNames = showMovieNames;
        }
    }
});

export const {toggleGPTSearch, addGPTMovieList} = GPTSlice.actions;
export default GPTSlice.reducer;