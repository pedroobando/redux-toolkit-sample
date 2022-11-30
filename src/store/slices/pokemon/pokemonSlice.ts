import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IPokemon {
  name: string;
  url: string;
}

export interface IPokemonState {
  page: number;
  pokemons: IPokemon[];
  isLoading: boolean;
}

const initialState: IPokemonState = {
  page: 0,
  pokemons: [],
  isLoading: false,
};

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    starLoadingPokemon: (state) => {
      state.isLoading = true;
    },
    setPokemons: (state, action: PayloadAction<{ page: number; pokemons: IPokemon[] }>) => {
      state.isLoading = false;
      state.page = action.payload.page;
      state.pokemons = action.payload.pokemons;
    },
  },
});

export const { starLoadingPokemon, setPokemons } = pokemonSlice.actions;
