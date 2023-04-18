import {axiosService} from "./axios.service";
import {urls} from "../constants";

const pokemonService={
    getAllPokemon:(offset=1)=>axiosService.get(urls.pokemon, {params:{offset}}),
    getAllTypes:()=>axiosService.get(urls.type),
}

export {pokemonService}