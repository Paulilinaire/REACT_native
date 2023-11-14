import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

export const fetchPokemons = createAsyncThunk(
  'pokemon/fetchPokemons',
  async () => {
    try {
      const response = await fetch(`${BASE_URL}?offset=10&limit=50`);
      const data = await response.json();

      // Use Promise.all to fetch details for all pokemons concurrently
      const detailsPromises = data.results.map(async (pokemon) => {
        const responseDetails = await fetch(pokemon.url);
        const detailsData = await responseDetails.json();
        return detailsData;
      });

      const detailsResults = await Promise.all(detailsPromises);

      // Combine main data with details for each pokemon
      const combinedData = data.results.map((pokemon, index) => ({
        mainData: pokemon,
        detailsData: detailsResults[index],
      }));

      return combinedData;

    } catch (error) {
      console.error('fetchPokemon error:', error);
      throw error;
    }
  }
);

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    pokemons: [],
    pokemonsDetails:[],
    pokedex: [],
    
  },
  reducers: {
    setPokedex: (state, action) => {
      state.pokedex.push(action.payload)
    },
    addPokedex: (state, action) => {
      state.pokedex.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPokemons.fulfilled, (state, action) => {
      state.pokemons = action.payload;
    });
  },
});

export const { addPokedex } = pokemonSlice.actions;
export default pokemonSlice.reducer;
