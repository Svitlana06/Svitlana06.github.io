import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {pokemonReducer} from "./slice/pokemon.slice";

const rootReducer = combineReducers({
    pokemon: pokemonReducer,
})

const store = configureStore({
    reducer: rootReducer
})
export default store