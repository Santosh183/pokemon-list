import { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss'
import { Outlet, useNavigate } from 'react-router-dom';
import { useGetPokemons } from '../../hooks/useGetPokemons';
import { Pokemon } from '../../models/pokemonModels';
import { Loader } from '../generic/Loader';
import { PokemonListItem } from './PokemonListItem';
import { Search } from './Search';

export const PokemonList = () => {
  const classes = useStyles();
  const { pokemons, loading } = useGetPokemons();
  const defaultState: Pokemon[] = pokemons;
  const [filteredPokemons, setFilteredPokemons] = useState(defaultState);
  const [isFiltering, setIsFiltering] = useState(false);
  const navigate = useNavigate();

  const search = (searchString: string) => {
    const filteredData = pokemons.filter(pkmn => pkmn.name.toLowerCase().includes(searchString.trim().toLowerCase()));
    setIsFiltering(true); // make sure initial unnecssary "No Pokemans available!" is not displayed when filteirng is in process
    setFilteredPokemons(filteredData);
  };

  useEffect(() => {
    setFilteredPokemons(pokemons);
  }, [pokemons]);



  return (
    <>
      <Search handleSearch={search} />
      <div className={`${classes.root} ${classes.list}`}>
        {loading && <Loader />}
        {!loading && filteredPokemons.length === 0 && isFiltering &&
          <div> No Pokemans available!</div>
        }
        {filteredPokemons.map((pkmn) => (
          <div key={pkmn.id} onClick={() => navigate(`${pkmn.id}`, { state: { id: pkmn.id, name: pkmn.name } })} className={classes.listItem}>
            <PokemonListItem pkmn={pkmn} />
          </div>
        ))}
      </div>
      <Outlet />
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
    },
    '@media only screen and (max-width: 768px)': {
      list: {
        padding: '10px',
        gap: '10px',
      },
      listItem: {
        width: '100%',
        padding: '5px',
      }
    }
  },
  { name: 'PokemonList' }
);
