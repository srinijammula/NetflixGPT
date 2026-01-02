import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: [],
        popularMovies:[],
        topRatedMovies: [],
        upcomingMovies: [],
        trailer: null
    },
    reducers: {
        setNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        setPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        setTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        setUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        setTrailer: (state, action) => {
            state.trailer = action.payload;
        }
    }
});

export const {setNowPlayingMovies, setPopularMovies, setTopRatedMovies, setUpcomingMovies, setTrailer} = movieSlice.actions;
export default movieSlice.reducer;