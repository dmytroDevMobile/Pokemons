export const BASE_URL = 'https://pokeapi.co/api/v2/';

export const GET_LIST_WITH_PAGINATION = (limit: number, offset: number) => `pokemon?limit=${limit}&offset=${offset}`;
export const GET_POKEMON_DETAILS = (name: string) => `pokemon/${name}`;
