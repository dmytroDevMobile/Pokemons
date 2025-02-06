import React from 'react';
import { render } from '@testing-library/react-native';
import Details from '../app/DetailsScreen';
import { capitalizeFirstLetter } from '@/utils/helpers';

const mockDetails = {
  name: 'bulbasaur',
  order: 1,
  id: 1,
  stats: [
    { stat: { name: 'hp' }, base_stat: 45 },
    { stat: { name: 'attack' }, base_stat: 49 },
  ],
  abilities: [
    { ability: { name: 'chlorophyll' } },
    { ability: { name: 'overgrow' } },
  ],
  base_experience: 64,
  height: 7,
  weight: 69,
  moves: [
    { move: { name: 'tackle' } },
    { move: { name: 'vine-whip' } },
  ],
  sprites: {
    other: {
      home: {
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/132.png',
      },
    },
  },
  types: [
    { type: { name: 'grass' } },
    { type: { name: 'poison' } },
  ],
};

describe('<Details />', () => {
  it('should render the Pokémon name and order correctly', () => {
    const { getByText } = render(<Details route={{ params: { details: mockDetails } }} />);

    // Check if Pokémon name and order are displayed correctly
    expect(getByText(capitalizeFirstLetter(mockDetails.name))).toBeTruthy();
    expect(getByText(`# ${mockDetails.order}`)).toBeTruthy();
  });

  it('should render the stats correctly', () => {
    const { getByText } = render(<Details route={{ params: { details: mockDetails } }} />);

    // Check if stats are rendered correctly
    mockDetails.stats.forEach((stat) => {
      expect(getByText(`${capitalizeFirstLetter(stat.stat.name)}: ${stat.base_stat}`)).toBeTruthy();
    });
  });

  it('should render abilities correctly', () => {
    const { getByText } = render(<Details route={{ params: { details: mockDetails } }} />);

    // Check if abilities are rendered correctly
    mockDetails.abilities.forEach((ability) => {
      expect(getByText(capitalizeFirstLetter(ability.ability.name))).toBeTruthy();
    });
  });

  it('should render Pokémon image correctly', () => {
    const { getByRole } = render(<Details route={{ params: { details: mockDetails } }} />);

    // Check if the Pokémon image is rendered correctly
    const image = getByRole('image');
    expect(image.props.source.uri).toBe(mockDetails.sprites.other.home.front_default);
  });

  it('should render Pokémon types correctly', () => {
    const { getByText } = render(<Details route={{ params: { details: mockDetails } }} />);

    // Check if types are rendered correctly
    mockDetails.types.forEach((type) => {
      expect(getByText(capitalizeFirstLetter(type.type.name))).toBeTruthy();
    });
  });

  it('should render moves correctly', () => {
    const { getByText } = render(<Details route={{ params: { details: mockDetails } }} />);

    // Check if moves are rendered correctly
    mockDetails.moves.forEach((move) => {
      expect(getByText(capitalizeFirstLetter(move.move.name))).toBeTruthy();
    });
  });

  it('should render the height and weight correctly under Breeding', () => {
    const { getByText } = render(<Details route={{ params: { details: mockDetails } }} />);

    // Check if height and weight are displayed correctly
    expect(getByText('Height')).toBeTruthy();
    expect(getByText(mockDetails.height.toString())).toBeTruthy();
    expect(getByText('Weight')).toBeTruthy();
    expect(getByText(mockDetails.weight.toString())).toBeTruthy();
  });

  it('should render the Exp value correctly', () => {
    const { getByText } = render(<Details route={{ params: { details: mockDetails } }} />);

    // Check if the Exp value is displayed correctly
    expect(getByText(`Exp: ${mockDetails.base_experience}`)).toBeTruthy();
  });
});
