import { pokemonApi } from '../../../api/pokemonApi';
import { setPokemons, starLoadingPokemon } from './pokemonSlice';

export const getPokemons = (page: number = 0) => {
  return async (dispatch: any, getState: any) => {
    dispatch(starLoadingPokemon());

    // await fetchApi
    // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${page * 10}&limit=10`);
    // const data = await resp.json();
    // console.log(data.results);

    const { data } = await pokemonApi.get(`/pokemon?offset=${page * 10}&limit=10`);
    console.log(data.results);

    dispatch(setPokemons({ page: page + 1, pokemons: data.results }));
  };
};
