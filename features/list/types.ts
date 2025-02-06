export interface PokemonListItem {
  name: string;
  url: string;
  details: PokemonDetails;
}

export interface ListState {
  list: PokemonListItem[];
  count: number;
  status?: 'idle' | 'loading' | 'failed';
}

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
