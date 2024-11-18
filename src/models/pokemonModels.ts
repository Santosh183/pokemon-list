export type Pokemon = {
    id: string;
    name: string;
    number: string;
    types: string[];
    image: string;
};
export type PokemonDetails = {
    id: string;
    number: string;
    name: string;
    weight: {
        minimum: string;
        maximum: string;
    };
    height: {
        minimum: string,
        maximum: string
    };
    classification: string;
    types: string[];
    resistant: string[];
    weaknesses: string[]
    fleeRate: number;
    maxCP: number;
    maxHP: number;
    image: string;
};