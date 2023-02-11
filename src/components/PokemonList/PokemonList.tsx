import { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useGetPokemons } from '../../hooks/useGetPokemons';
import { Pokemon } from '../../models/pokemonModels';
import { PokemonDetails } from '../PokemonDetails';
import { PokemonListItem } from './PokemonListItem';
import { Search } from './Search';

export const PokemonList = () => {
  const classes = useStyles();
  const { pokemons, loading } = useGetPokemons();
  const defaultState: Pokemon[] = pokemons;
  const [filteredPokemons, setFilteredPokemons] = useState(defaultState)
  const [currentPokemon, setCurrentPokemon] = useState({ id: '', name: '' });

  const search = (searchString: string) => {
    const filteredData = pokemons.filter(pkmn => pkmn.name.toLowerCase().includes(searchString.trim().toLowerCase()))
    setFilteredPokemons(filteredData)
  };

  useEffect(() => {
    search('');
  }, [pokemons])



  return (
    <>
      <Search handleSearch={search} />
      <div className={`${classes.root} ${classes.list}`}>
        {loading && <div>Loading...</div>}
        {filteredPokemons.map((pkmn) => (
          <div key={pkmn.id} onClick={() => setCurrentPokemon({ id: pkmn.id, name: pkmn.name })} className={classes.listItem}>
            <PokemonListItem pkmn={pkmn} />
          </div>
        ))}
      </div>
      {currentPokemon.id && currentPokemon.name && <PokemonDetails currentPokemon={currentPokemon} dismiss={setCurrentPokemon} />}
    </>
  );
};

const useStyles = createUseStyles(
  {
    root: {
      width: '100%',
      textAlign: 'center',
      padding: '32px',
      boxSizing: 'border-box'
    },
    list: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '30px',
      height: 'calc( 100% - 80px)',
      overflow: 'auto',
      paddingTop: '25px'
    },
    listItem: {
      width: '25%',
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
      boxShadow: '0px 0px 1px 1px rgb(255 255 255 / 10%)',
      padding: '15px',
      '&:hover': {
        background: '#171e2b',
        filter: 'brightness(120%)',
        cursor: 'pointer'
      }
    }
  },
  { name: 'PokemonList' }
);
