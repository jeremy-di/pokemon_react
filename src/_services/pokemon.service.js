import Axios from "./caller.service";

let getAllPokemons = () => {
    return Axios.get(`/pokemon/generation/1`)
}

let getPokemon = (id) => {
    return Axios.get(`/pokemon/${id}`)
}

export const pokemonService = {
    getAllPokemons, getPokemon
}