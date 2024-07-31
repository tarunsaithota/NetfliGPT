import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        popularMovies : null,
        topRatedMovies: null,
        upComingMovies: null,
        trailerVideo: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcComingMovies: (state, action) => {
            state.upComingMovies = action.payload;
        },
        addTrailer: (state, action) => {
            state.trailerVideo = action.payload;
        }
    }
})

export const {addNowPlayingMovies, addTrailer, addPopularMovies, addTopRatedMovies, addUpcComingMovies} = moviesSlice.actions;
export default moviesSlice.reducer;