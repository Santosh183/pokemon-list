import React from 'react';
import { createUseStyles } from 'react-jss';
import { useGetPokemons } from '../../hooks/useGetPokemons';

export const PokemonList = () => {
  const classes = useStyles();
  const { pokemons, loading } = useGetPokemons();

  return (
    <div className={classes.root}>
      {loading && <div>Loading...</div>}
      {pokemons.map((pkmn) => (
        <div key={pkmn.id} className={classes.listItem}>
          <div className={classes.avatar}>
          </div>
          <div className={classes.info}>
            <div className={classes.name}>{pkmn.name}</div>
            <div className={classes.number}>
              <span className={classes.label}>Number: </span>
              <span></span>
            </div>
            <div className={classes.types}>
              <span className={classes.label}>Types: </span>
              <span></span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const useStyles = createUseStyles(
  {
    root: {
      width: '100%',
      textAlign: 'center',
      padding: '32px',
      boxSizing: 'border-box',
    },
    list: {

    },
    listItem: {

    },
    avatar: {

    },
    info: {

    },
    name: {

    },
    label: {

    },
    number: {

    },
    types: {

    }
  },
  { name: 'PokemonList' }
);
