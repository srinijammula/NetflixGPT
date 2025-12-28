import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: [],
    },
    reducers: {
        setNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        }
    }
});

export const {setNowPlayingMovies} = movieSlice.actions;
export default movieSlice.reducer;