import api from "@/utils/axios";
import {GET_LIST_WITH_PAGINATION, GET_POKEMON_DETAILS} from '../../constants/endpoints';
import { PokemonListItem } from "../list/listSlice";

export interface BasePokemonObject {
  name: string;
  url: string;
}

export interface Ability {
  ability: BasePokemonObject;
  is_hidden: boolean;
  slot: number;
}

export interface Move {
  move: BasePokemonObject;
}

export interface Type {
  type: BasePokemonObject;
};

export interface Stat {
  base_stat: number;
  effort: number;
  stat: BasePokemonObject;
}

export interface Sprite {
  other: {
    home: {
      front_default: string;
    },
  },
}

export interface PokemonDetails {
  abilities: Ability[];
  moves: Move[];
  types: Type[];
  stats: Stat[];
  base_experience: number;
  height: number;
  id: number;
  name: string;
  order: number;
  weight: number;
  sprites: Sprite;
};

export const fetchDetails = async (nameStr: string) => {
  const {
    data: {
      abilities,
      moves,
      types,
      stats,
      base_experience,
      height,
      id,
      name,
      order,
      weight,
      sprites,
    }} = (await api.get(GET_POKEMON_DETAILS(nameStr)) as {data: PokemonDetails});
  return {
    abilities,
    moves,
    types,
    stats,
    base_experience,
    height,
    id,
    name,
    order,
    weight,
    sprites,
  };
};