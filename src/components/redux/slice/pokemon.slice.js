import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {pokemonService} from "../../../services";

const getAllPokemon = createAsyncThunk(
    'pokemonSlice/getAllPokemon',
    async ({offset}) => {
        const {data} = await pokemonService.getAllPokemon(offset)
        return data
    }
)

const getTypePokemon = createAsyncThunk(
    'pokemonSlice/getATypePokemon',
    async ({offset}) => {
        const {data} = await pokemonService.getTypePokemon(offset)
        return data
    }
)

let initialState = {
    pokemon: [],
    next: null,
    prev: null,
    typeSelected:true,
    changeColor:0,
    pokemonName:[],
    weight:"",
    name:"",
    url:"",
    onePokemon:[],
    defence:0,
    newColor:"",
    typeSelectedUrl:"",
    image:""
}

const pokemonSlice = createSlice({
    name: 'pokemonSlice',
    initialState,
    reducers: {
        typesPokemon:(state, action)=>{
         state.typeSelected=action.payload
        },
        newColorText:(state, action)=>{
            state.newColor=action.payload
        },
        typeSelectedPokemon:(state, action)=>{
            state.typeSelectedUrl=action.payload
        },
        pokemonDetails:(state, action)=>{
            state.onePokemon=action.payload
            const {type, image, name, weight, newStats, defense, moves, attack, specialDefense, specialAttack, hp, speed,newColor, id}=state.onePokemon

        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(
                getAllPokemon.fulfilled, (state, action) => {
                    state.pokemon = action.payload
                })

    }
})
const {reducer: pokemonReducer, actions: {typesPokemon, pokemonDetails, newColorText,typeSelectedPokemon,typeSelectedPokemon1}} = pokemonSlice
const pokemonActions = {
    getAllPokemon,
    typeSelectedPokemon1,
    typesPokemon,
    pokemonDetails,
    newColorText,
    typeSelectedPokemon
}
export {pokemonReducer, pokemonActions}


