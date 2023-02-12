import { useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { useLocation, useNavigate } from 'react-router-dom';
import { useGetPokemonDetails } from '../../hooks/useGetPokemonDetails';
import { Loader } from '../generic/Loader';



export const PokemonDetails = () => {
    const classes = useStyles();
    const location = useLocation();
    const navigate = useNavigate();
    const id = location.state.id;
    const name = location.state.name;
    const { pokemonDetails, loading } = useGetPokemonDetails(id, name);

    return (
        <>
            <div onClick={() => navigate(-1)} className={classes.modalContainer}>
                <div onClick={(e) => e.stopPropagation()} className={classes.modalBody}>
                    <span onClick={() => navigate(-1)} className="material-icons">close</span>
                    {loading && <Loader />}
                    {!loading && !pokemonDetails.id && <h3> Details Not Found!</h3>}
                    <>
                        {
                            !loading && pokemonDetails.id &&
                            <div className={classes.details}>
                                <div className={classes.avatar}>
                                    <img src={pokemonDetails.image} alt={pokemonDetails.name} />
                                </div>
                                <div className={classes.divider}></div>
                                <div className={classes.info}>
                                    <h2>{pokemonDetails.name}</h2>
                                    <div className={classes.field}>
                                        <span className={classes.label}>Number: </span>
                                        <span className={classes.value}>{pokemonDetails.number}</span>
                                    </div>
                                    <div className={classes.field}>
                                        <span className={classes.label}>Weight Range: </span>
                                        <span className={classes.value}>
                                            {pokemonDetails.weight.maximum + ' - ' + pokemonDetails.weight.minimum}
                                        </span>
                                    </div>
                                    <div className={classes.field}>
                                        <span className={classes.label}>Height Range: </span>
                                        <span className={classes.value}>
                                            {pokemonDetails.height.maximum + ' - ' + pokemonDetails.height.minimum}
                                        </span>
                                    </div>
                                    <div className={classes.field}>
                                        <span className={classes.label}>Classification: </span>
                                        <span className={classes.value}>{pokemonDetails.classification}</span>
                                    </div>
                                    <div className={classes.field}>
                                        <span className={classes.label}>Types: </span>
                                        <span className={classes.value}>{pokemonDetails.types.join(', ')}</span>
                                    </div>
                                    <div className={classes.field}>
                                        <span className={classes.label}>Resistant: </span>
                                        <span className={classes.value}>{pokemonDetails.resistant.join(', ')}</span>
                                    </div>
                                    <div className={classes.field}>
                                        <span className={classes.label}>Weaknesses: </span>
                                        <span className={classes.value}>{pokemonDetails.weaknesses.join(', ')}</span>
                                    </div>
                                    <div className={classes.field}>
                                        <span className={classes.label}>Max-Cp: </span>
                                        <span className={classes.value}>{pokemonDetails.maxCP}</span>
                                    </div>
                                    <div className={classes.field}>
                                        <span className={classes.label}>Max-Hp: </span>
                                        <span className={classes.value}>{pokemonDetails.maxHP}</span>
                                    </div>
                                </div>
                            </div>
                        }
                    </>
                </div>
            </div>
        </>
    );
};

const useStyles = createUseStyles(
    {
        modalContainer: {
            width: '100vw',
            height: '100vh',
            position: 'fixed',
            background: 'rgba(0,0,0,0.5)',
            top: '0',
            left: '0',
            overflow: 'auto',
            zIndex: '101'
        },
        modalBody: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '50vw',
            height: '400px',
            transform: 'translate(-50%,-50%)',
            background: '#171e2b',
            boxShadow: '0px 0px 1px 1px rgb(255 255 255 / 10%)',
            padding: '35px',
            '& span.material-icons': {
                position: 'absolute',
                top: '7px',
                right: '7px',
                cursor: 'pointer'
            }
        },
        details: {
            boxShadow: '0px 0px 1px 1px rgb(255 255 255 / 10%)',
            display: 'flex',
            gap: '10px',
            height: '100%'
        },
        avatar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '& img': {
                width: '90%',
                height: '90%',
            }
        },
        divider: {
            boxShadow: '0px 0px 1px 1px rgb(255 255 255 / 10%)',
            width: '0px',
            height: '100%'
        },
        info: {
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            padding: '10px'
        },
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
        '@media only screen and (max-width: 768px)': {
            modalBody: {
                width: '80vw',
                zIndex: '101',
                padding: '20px',
                top: '35%',
                height: '60%',
                '& span.material-icons': {
                    fontSize: '18px',
                    top: '0',
                    right: '0'
                }
            },
            details: {
                boxShadow: '0px 0px 1px 1px rgb(255 255 255 / 10%)',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                height: '100%'
            },
            avatar: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '& img': {
                    width: '60%',
                }
            },
            info: {
                gap: '5px',
                padding: '10px',
                '& h2': {
                    fontSize: '18px',
                },
                fontSize: '14px'
            },
            divider: {
                width: '100%',
                height: '0px'
            },
        }
    },
    { name: 'PokemonDetails' }
);
