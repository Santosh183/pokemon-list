import { useMemo } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { PokemonDetails } from '../models/pokemonModels';



export const GET_POKEMON_DETAILS = gql`
query pokemon($id: String, $name: String){
    pokemon(id: $id, name: $name){
      id
      number
      name
      weight{
        minimum
        maximum
      }
      height{
        minimum
        maximum
      }
      classification
      types
      resistant
      weaknesses
      fleeRate
      maxCP
      maxHP
      image
    }
}
`;

export const useGetPokemonDetails = (id: string, name: string) => {
    const { data, ...queryRes } = useQuery(GET_POKEMON_DETAILS, {
        variables: {
            id,
            name
        },
    });

    const pokemonDetails: PokemonDetails = useMemo(() => data?.pokemon || {}, [data]);

    return {
        pokemonDetails,
        ...queryRes,
    };
};
