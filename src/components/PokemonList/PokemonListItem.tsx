
import { createUseStyles } from 'react-jss';
import { Pokemon } from '../../models/pokemonModels';


interface PokemonListItemProps {
    pkmn: Pokemon
}


export const PokemonListItem: React.FC<PokemonListItemProps> = ({ pkmn }) => {
    const classes = useStyles();


    return (
        <>
            <div className={classes.avatar}>
                <img src={pkmn.image} />
            </div>
            <div className={classes.info}>
                <div className={classes.name}>{pkmn.name}</div>
                <div className={classes.number}>
                    Number:
                    <span>{pkmn.number}</span>
                </div>
                <div className={classes.types}>
                    Types:
                    <span>{pkmn.types.join(', ')}</span>
                </div>
            </div>
        </>
    );
};

const useStyles = createUseStyles(
    {
        avatar: {
            '& img': {
                width: '100px',
                height: '100px',
                borderRadius: '50%'
            }
        },
        info: {
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: 'column',
            fontSize: '15px'
        },
        name: {
            fontSize: '20px',
            fontFamily: 'cursive',
            paddingBottom: '10px'
        },
        number: {
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
            '& span': {
                color: 'rgba(255,255,255,.68)',
                fontSize: '13px'
            }
        },
        types: {
            extend: 'number'
        }
    },
    { name: 'PokemonListItem' }
);
