import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

export const fetchPokemons = createAsyncThunk(
  'pokemon/fetchPokemons',
  async () => {
    try {
      const response = await fetch(`${BASE_URL}?offset=10&limit=50`);
      const data = await response.json();
      console.log('fetchPokemons data:', data);
      return data.results;
    } catch (error) {
      console.error('fetchPokemons error:', error);
      throw error;
    }
  }
);

export const fetchPokemon = createAsyncThunk(
  'pokemon/fetchPokemon',
  async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/${id}`);
      const data = await response.json();
      console.log('fetchPokemon data:', data);
      return data;
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
    pokedex: [],
  },
  reducers: {
    addPokedex: (state, action) => {
      state.pokedex.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPokemons.fulfilled, (state, action) => {
      console.log('fetchPokemons fulfilled:', action.payload);
      state.pokemons = action.payload;
    });
  },
});

export const { addPokedex } = pokemonSlice.actions;
export default pokemonSlice.reducer;
