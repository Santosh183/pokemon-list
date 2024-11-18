import { createUseStyles } from 'react-jss';
import { PokemonDetails } from '../../models/pokemonModels';

interface DetailFieldsProps {
    pokemonDetails: PokemonDetails
}

type FieldDetail = {
    label: string;
    value: string | number;
};

export const DetailFields: React.FC<DetailFieldsProps> = ({ pokemonDetails }) => {
    const classes = useStyles();

    const fieldDetails: FieldDetail[] = [
        {
            label: 'Number',
            value: pokemonDetails.number,
        },
        {
            label: 'Weight Range',
            value: `${pokemonDetails.weight.minimum} - ${pokemonDetails.weight.maximum}`,
        },
        {
            label: 'Height Range',
            value: `${pokemonDetails.height.minimum} - ${pokemonDetails.height.maximum}`
        },
        {
            label: 'Classification',
            value: pokemonDetails.classification,
        },
        {
            label: 'Types',
            value: pokemonDetails.types.join(', '),
        },
        {
            label: 'Resistant',
            value: pokemonDetails.resistant.join(', '),
        },
        {
            label: 'Weaknesses',
            value: pokemonDetails.weaknesses.join(', '),
        },
        {
            label: 'Max-Cp',
            value: pokemonDetails.maxCP,
        },
        {
            label: 'Max-Hp',
            value: pokemonDetails.maxHP,
        },
    ];

    return (
        <>
            {
                fieldDetails.map(({ label, value }) => {
                    return <div className={classes.field} key={label}>
                        <span className={classes.label}> {label} : </span>
                        <span className={classes.value}>{value}</span>
                    </div>
                })
            }
        </>
    );
};

const useStyles = createUseStyles(
    {

        field: {
            display: 'flex',
            gap: '10px'
        },
        label: {
            color: '#00acc1',
            width: '40%'
        },
        value: {
            width: '60%',
            color: 'rgba(255,255,255,.68)'
        },
    },
    { name: 'Field' }
);
