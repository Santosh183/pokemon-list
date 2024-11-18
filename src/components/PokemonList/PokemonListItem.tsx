
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
            color: '#00acc1',
            gap: '10px',
            alignItems: 'center',
            '& span': {
                color: 'rgba(255,255,255,.68)',
                fontSize: '13px'
            }
        },
        types: {
            extend: 'number'
        },
        '@media only screen and (max-width: 768px)': {
            avatar: {
                '& img': {
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%'
                }
            },
            info: {
                fontSize: '12px'
            },
            name: {
                fontSize: '15px',
                paddingBottom: '5px'
            },
        }
    },
    { name: 'PokemonListItem' }
);
