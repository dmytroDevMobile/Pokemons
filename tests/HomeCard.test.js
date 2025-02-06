import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { HomeCard } from '../components/HomeCard';
import { capitalizeFirstLetter } from '@/utils/helpers';

const mockPokemon = {
  details: {
    id: 1,
    name: 'bulbasaur',
    order: 1,
    sprites: {
      other: {
        home: {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/132.png',
        },
      },
    },
    types: [{ type: { name: 'grass' } }, { type: { name: 'poison' } }],
  },
  index: 0,
  onItemPress: jest.fn(),
};

describe('<HomeCard />', () => {
  it('should render Pokémon name, order, and image correctly', () => {
    const { getByText, getByRole } = render(
      <HomeCard item={mockPokemon} index={0} onItemPress={mockPokemon.onItemPress} />
    );

    // Check if Pokémon name is rendered correctly
    expect(getByText(capitalizeFirstLetter(mockPokemon.details.name))).toBeTruthy();

    // Check if Pokémon order is displayed correctly
    expect(getByText(`# ${mockPokemon.details.order}`)).toBeTruthy();

    // Check if Pokémon image is rendered correctly (image URL)
    const image = getByRole('image');
    expect(image.props.source.uri).toBe(mockPokemon.details.sprites.other.home.front_default);
  });

  it('should call onItemPress when the card is pressed', () => {
    const { getByRole } = render(
      <HomeCard item={mockPokemon} index={0} onItemPress={mockPokemon.onItemPress} />
    );

    // Simulate pressing the card
    fireEvent.press(getByRole('button'));

    // Check if onItemPress was called with correct details
    expect(mockPokemon.onItemPress).toHaveBeenCalledWith(mockPokemon.details);
  });

  it('should render Pokémon types correctly', () => {
    const { getByText } = render(
      <HomeCard item={mockPokemon} index={0} onItemPress={mockPokemon.onItemPress} />
    );

    // Check if the Pokémon types are rendered
    mockPokemon.details.types.forEach((type) => {
      expect(getByText(capitalizeFirstLetter(type.type.name))).toBeTruthy();
    });
  });

  it('should apply correct styles based on the index', () => {
    const { getByRole } = render(
      <HomeCard item={mockPokemon} index={0} onItemPress={mockPokemon.onItemPress} />
    );

    // Check if the style for extra margin is applied when index is 0
    const card = getByRole('button');
    expect(card.props.style).toContainEqual(expect.objectContaining(styles.extraCardMargin));
  });

  it('should not apply extra margin if the index is odd', () => {
    const { getByRole } = render(
      <HomeCard item={mockPokemon} index={1} onItemPress={mockPokemon.onItemPress} />
    );

    // Check if extra margin style is not applied for odd index
    const card = getByRole('button');
    expect(card.props.style).not.toContainEqual(expect.objectContaining(styles.extraCardMargin));
  });
});
