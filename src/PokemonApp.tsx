import { FC, useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from './store';
import { getPokemons } from './store/slices/pokemon';

export const PokemonApp: FC = () => {
  const dispatch = useAppDispatch();
  const [activePage, setActivePage] = useState(0);
  const { page, pokemons, isLoading } = useAppSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(getPokemons(activePage));
  }, [activePage]);

  return (
    <>
      <h1>Pokemon App {page}</h1>

      <hr />
      <h3>Loading {isLoading && 'True'}</h3>

      <ul>
        {pokemons.map((p) => (
          <li key={p.name}>{p.name}</li>
        ))}
      </ul>

      <button onClick={() => setActivePage((p) => p - 1)}>Back</button>

      <button onClick={() => setActivePage((p) => p + 1)}>Next</button>
    </>
  );
};
