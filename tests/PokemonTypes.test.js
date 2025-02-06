import React from 'react';
import { render } from '@testing-library/react-native';
import { PokemonTypes } from '../components/PokemonTypes';
import { PokemonTypeColors } from '@/constants/Colors';

// Mock data
const mockTypes = [
  { type: { name: 'fire' } },
  { type: { name: 'water' } },
  { type: { name: 'grass' } },
];

const mockId = 1;

describe('<PokemonTypes />', () => {
  it('should display the types of the Pokémon correctly', () => {
    const { getByText } = render(<PokemonTypes types={mockTypes} id={mockId} />);
    
    // Check that the correct text for each Pokémon type is displayed
    expect(getByText('Fire')).toBeTruthy();
    expect(getByText('Water')).toBeTruthy();
    expect(getByText('Grass')).toBeTruthy();
  });

  it('should apply the correct background and text colors for each Pokémon type', () => {
    const { getByText } = render(<PokemonTypes types={mockTypes} id={mockId} />);
    
    // Check that each type has the correct background and text colors applied
    const fireText = getByText('Fire');
    expect(fireText.parentNode.props.style[0].backgroundColor).toBe(PokemonTypeColors.fire.bg);
    expect(fireText.props.style.color).toBe(PokemonTypeColors.fire.text);

    const waterText = getByText('Water');
    expect(waterText.parentNode.props.style[0].backgroundColor).toBe(PokemonTypeColors.water.bg);
    expect(waterText.props.style.color).toBe(PokemonTypeColors.water.text);

    const grassText = getByText('Grass');
    expect(grassText.parentNode.props.style[0].backgroundColor).toBe(PokemonTypeColors.grass.bg);
    expect(grassText.props.style.color).toBe(PokemonTypeColors.grass.text);
  });

  it('should correctly capitalize the first letter of the Pokémon types', () => {
    const { getByText } = render(<PokemonTypes types={mockTypes} id={mockId} />);
    
    // Check that Pokémon types are capitalized correctly
    expect(getByText('Fire')).toBeTruthy();
    expect(getByText('Water')).toBeTruthy();
    expect(getByText('Grass')).toBeTruthy();
  });

  it('should not break if the types are empty or undefined', () => {
    // Test for an empty array of types
    const { queryByText } = render(<PokemonTypes types={[]} id={mockId} />);
    expect(queryByText('Fire')).toBeNull();
    expect(queryByText('Water')).toBeNull();
    expect(queryByText('Grass')).toBeNull();

    // Test for null types
    const { queryByText: queryByTextNull } = render(<PokemonTypes types={null} id={mockId} />);
    expect(queryByTextNull('Fire')).toBeNull();
  });
});
