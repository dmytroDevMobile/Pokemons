import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { Search } from '../components/SearchBar';
import { fetchDetails } from '@/features/requests/fetchDetails';
import { useAppNavigation } from '@/hooks/useAppNavigation';
import { Screens } from '@/navigation/types';
import { ActivityIndicator } from 'react-native-paper';

// Mocking the hooks and functions
jest.mock('@/hooks/useAppNavigation');
jest.mock('@/features/requests/fetchDetails');

const mockNavigate = jest.fn();
useAppNavigation.mockReturnValue({ navigate: mockNavigate });

const mockFetchDetails = fetchDetails;

describe('<Search />', () => {
  it('should render the search input and Go button', () => {
    const { getByPlaceholderText, getByText } = render(<Search />);
    
    // Check if the search input and Go button are rendered
    expect(getByPlaceholderText('E.g. Pikachu')).toBeTruthy();
    expect(getByText('Go')).toBeTruthy();
  });

  it('should show a dialog when the search field is empty and "Go" is pressed', async () => {
    const { getByText, getByPlaceholderText } = render(<Search />);
    
    // Simulate pressing the "Go" button with an empty search field
    fireEvent.changeText(getByPlaceholderText('E.g. Pikachu'), '');
    fireEvent.press(getByText('Go'));
    
    // Wait for the dialog to be shown
    await waitFor(() => {
      expect(getByText('Ooops')).toBeTruthy();
      expect(getByText('Looks like search field is empty')).toBeTruthy();
    });
  });

  it('should call the API and navigate to Details screen when search is successful', async () => {
    // Mocking the fetchDetails to return a mock result
    mockFetchDetails.mockResolvedValue({ name: 'Pikachu', id: 25 });
    
    const { getByText, getByPlaceholderText } = render(<Search />);
    
    // Simulate typing a search term and pressing the "Go" button
    fireEvent.changeText(getByPlaceholderText('E.g. Pikachu'), 'Pikachu');
    fireEvent.press(getByText('Go'));
    
    // Wait for the API call to finish and the navigation to occur
    await waitFor(() => {
      expect(mockFetchDetails).toHaveBeenCalledWith('pikachu');
      expect(mockNavigate).toHaveBeenCalledWith(Screens.Details, {
        details: { name: 'Pikachu', id: 25 },
      });
    });
  });

  it('should show an error dialog when the API request fails', async () => {
    // Mocking the fetchDetails to reject with an error
    mockFetchDetails.mockRejectedValue(new Error('Request failed'));
    
    const { getByText, getByPlaceholderText } = render(<Search />);
    
    // Simulate typing a search term and pressing the "Go" button
    fireEvent.changeText(getByPlaceholderText('E.g. Pikachu'), 'Pikachu');
    fireEvent.press(getByText('Go'));
    
    // Wait for the error dialog to appear
    await waitFor(() => {
      expect(getByText('Hm...')).toBeTruthy();
      expect(getByText('Something went wrong. Try again.')).toBeTruthy();
    });
  });

  it('should display loading indicator while the API request is in progress', () => {
    // Mocking the fetchDetails to simulate a pending request
    mockFetchDetails.mockReturnValue(new Promise(() => {}));
    
    const { getByText, getByPlaceholderText } = render(<Search />);
    
    // Simulate typing a search term and pressing the "Go" button
    fireEvent.changeText(getByPlaceholderText('E.g. Pikachu'), 'Pikachu');
    fireEvent.press(getByText('Go'));
    
    // Check if the loading indicator is displayed
    expect(getByText('Go')).not.toBeTruthy();
    expect(getByText('Go').parentNode.findByType(ActivityIndicator)).toBeTruthy();
  });
});
