import api from "@/utils/axios";
import {GET_POKEMON_DETAILS} from '../../constants/endpoints';
import { PokemonDetails } from "../list/types";

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