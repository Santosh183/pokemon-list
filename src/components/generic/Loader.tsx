import { createUseStyles } from 'react-jss';

export const Loader = () => {

    const classes = useStyles();

    return (
        <div className={classes.spinnerContainer}>
            <div className={classes.spinner} >
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div >
        </div>
    );
};


const useStyles = createUseStyles(
    {
        "@global": {
            '@keyframes spinner': {
                '0%': {
                    'opacity': '1'
                },
                '100%': {
                    'opacity': '0'
                }
            },
        },
        spinnerContainer: {
            width: '100%',
            height: '100%',
            position: 'relative'
        },
        spinner: {
            display: 'inline-block',
            position: 'absolute',
            width: '80px',
            height: '80px',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            '& div': {
                transformOrigin: '40px 40px',
                animation: 'spinner 1.2s linear infinite',
                '&:after': {
                    content: '" "',
                    display: 'block',
                    position: 'absolute',
                    top: '3px',
                    left: '37px',
                    width: '5px',
                    height: '15px',
                    borderRadius: '20%',
                    background: '#fff'
                },
                '&:nth-child(1)': {
                    transform: 'rotate(0deg)',
                    animationDelay: '-1.1s'
                },
                '&:nth-child(2)': {
                    transform: 'rotate(30deg)',
                    animationDelay: '-1s'
                },
                '&:nth-child(3)': {
                    transform: 'rotate(60deg)',
                    animationDelay: '-0.9s'
                },
                '&:nth-child(4)': {
                    transform: 'rotate(90deg)',
                    animationDelay: '-0.8s'
                },
                '&:nth-child(5)': {
                    transform: 'rotate(120deg)',
                    animationDelay: '-0.7s'
                },
                '&:nth-child(6)': {
                    transform: 'rotate(150deg)',
                    animationDelay: '-0.6s'
                },
                '&:nth-child(7)': {
                    transform: 'rotate(180deg)',
                    animationDelay: '-0.5s'
                },
                '&:nth-child(8)': {
                    transform: 'rotate(210deg)',
                    animationDelay: '-0.4s'
                },
                '&:nth-child(9)': {
                    transform: 'rotate(240deg)',
                    animationDelay: '-0.3s'
                },
                '&:nth-child(10)': {
                    transform: 'rotate(270deg)',
                    animationDelay: '-0.2s'
                },
                '&:nth-child(11)': {
                    transform: 'rotate(300deg)',
                    animationDelay: '-0.1s'
                },
                '&:nth-child(12)': {
                    transform: 'rotate(330deg)',
                    animationDelay: '-0.0s'
                },

            }
        }

    },
    { name: 'Loader' }
);
