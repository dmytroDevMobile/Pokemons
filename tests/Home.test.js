import * as React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Home from '../../app/HomeScreen';
import { useAppNavigation } from '@/hooks/useAppNavigation';
import { getListAsync } from '@/features/list/listSlice';

jest.mock('@/hooks/useAppNavigation', () => ({
  useAppNavigation: jest.fn()
}));

jest.mock('@/features/list/listSlice', () => ({
  getListAsync: jest.fn(),
  selectList: jest.fn(() => ({ list: [], count: 0, status: 'idle' }))
}));

const mockStore = configureStore();

describe('Home Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      list: { list: [], count: 0, status: 'idle' }
    });
  });

  it('renders correctly', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    expect(getByText('Looking\nfor someone?')).toBeTruthy();
  });

  it('dispatches getListAsync on mount', async () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    
    await waitFor(() => {
      expect(getListAsync).toHaveBeenCalledWith(0);
    });
  });

  it('triggers search correctly', async () => {
    const { getByPlaceholderText, getByText } = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    const input = getByPlaceholderText('E.g. Pikachu');
    fireEvent.changeText(input, 'Pikachu');
    fireEvent.press(getByText('Go'));

    await waitFor(() => {
      expect(useAppNavigation().navigate).toHaveBeenCalled();
    });
  });
});