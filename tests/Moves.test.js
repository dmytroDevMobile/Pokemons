import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Moves } from '../components/Moves';

const mockMoves = [
  { move: { name: 'tackle' } },
  { move: { name: 'ember' } },
  { move: { name: 'water-gun' } },
  { move: { name: 'vine-whip' } },
  { move: { name: 'quick-attack' } },
  { move: { name: 'scratch' } },
];

describe('<Moves />', () => {
  it('Should show only first 5 moves if more then 5 elements in array', () => {
    const { getByText } = render(<Moves moves={mockMoves} />);
    
    expect(getByText('Tackle')).toBeTruthy();
    expect(getByText('Ember')).toBeTruthy();
    expect(getByText('Water-gun')).toBeTruthy();
    expect(getByText('Vine-whip')).toBeTruthy();
    expect(getByText('Quick-attack')).toBeTruthy();
    
    expect(() => getByText('Scratch')).toThrow();
  });

  it('Should show "Show more" button, if more then 5 items', () => {
    const { getByText } = render(<Moves moves={mockMoves} />);
    
    expect(getByText('Show more')).toBeTruthy();
  });

  it('Shoulds show more when "Show more" pressed', () => {
    const { getByText } = render(<Moves moves={mockMoves} />);
    
    fireEvent.press(getByText('Show more'));

    // Проверяем, что теперь все движения отображаются
    expect(getByText('Tackle')).toBeTruthy();
    expect(getByText('Ember')).toBeTruthy();
    expect(getByText('Water-gun')).toBeTruthy();
    expect(getByText('Vine-whip')).toBeTruthy();
    expect(getByText('Quick-attack')).toBeTruthy();
    expect(getByText('Scratch')).toBeTruthy();
  });

  it('Should show "Show less" after "Show more" button clicked', () => {
    const { getByText } = render(<Moves moves={mockMoves} />);
    
    fireEvent.press(getByText('Show more'));
    expect(getByText('Show less')).toBeTruthy();
  });

  it('Should not show "Show more" button if array length less than 5', () => {
    const { queryByText } = render(<Moves moves={mockMoves.slice(0, 5)} />);
    
    expect(queryByText('Show more')).toBeNull();
  });

  it('Button "Show more" should be disabled if moves array length less then 5', () => {
    const { getByText } = render(<Moves moves={mockMoves.slice(0, 5)} />);
    
    expect(() => getByText('Show more')).toThrow();
  });
});
