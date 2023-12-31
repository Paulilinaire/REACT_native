import pokemonSlice from "./pokemonSlice";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
    reducer: {
        pokemons: pokemonSlice
    }
})