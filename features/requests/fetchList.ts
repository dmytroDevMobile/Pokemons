import api from "@/utils/axios";
import {GET_LIST_WITH_PAGINATION} from '../../constants/endpoints';
import { PokemonListItem } from "../list/types";

export const fetchList = async (limit: number, offset: number) => {
  const {data: {count, results}} = (await api.get(GET_LIST_WITH_PAGINATION(limit, offset)) as {data: {count: number, results: PokemonListItem[]}});
  return {count, list: results};
};