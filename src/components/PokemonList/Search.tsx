
import { createUseStyles } from 'react-jss';

interface SearchProps {
    handleSearch: Function
}


export const Search: React.FC<SearchProps> = ({
    handleSearch
}) => {
    const classes = useStyles();

    return (
        <div className={classes.searchContainer}>
            <span className="material-icons">search</span>
            <input
                onInput={($event: React.FormEvent<HTMLInputElement>) => handleSearch($event.currentTarget.value)}
                type="search"
                name="search"
                id="search"
            />
        </div>
    );
};

const useStyles = createUseStyles(
    {
        searchContainer: {
            padding: '20px 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '40px',
            gap: '10px',
            '& span': {
                width: '20px',
                height: '20px',
            },
            '& input': {
                padding: '5px',
                background: 'inherit',
                border: 'none',
                boxShadow: '0px 0px 1px 1px rgb(255 255 255 / 10%)',
                height: '100%',
                width: 'calc( 30% - 20px )',
            }
        },
        '@media only screen and (max-width: 768px)': {
            searchContainer: {
                padding: '10px',
                gap: '10px',
                '& span': {
                    width: '15px',
                    height: '15px'
                },
                '& input': {
                    padding: '5px',
                    background: 'inherit',
                    border: 'none',
                    boxShadow: '0px 0px 1px 1px rgb(255 255 255 / 10%)',
                    height: '100%',
                    width: 'calc( 90% - 20px )',
                }
            },
        }

    },
    { name: 'Search' }
);
