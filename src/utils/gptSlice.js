import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false,
        movieNames: [],
        movieResults: []
    },
    reducers:{
        toggleGptSearch: (state) =>{
            state.showGptSearch = !state.showGptSearch;
        },
        setGptMovies: (state, action) =>{
            const {movieNames, movieResults} = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
            console.log("Updated GPT Movies in Store:", state.movieNames, state.movieResults);
        }
    }
})

export const {toggleGptSearch, setGptMovies} = gptSlice.actions;
export default gptSlice.reducer;