import { PokemonListItem } from "@/features/list/listSlice";

export enum Screens {
  Home = 'Home',
  Details = 'Details',
};

export type RootStackParamList = {
  [Screens.Home]: undefined;
  [Screens.Details]: {
    details: PokemonListItem['details'],
  };
};
