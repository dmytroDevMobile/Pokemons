import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import listReducer from '../features/list/listSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    pokemonList: listReducer,
  },
});

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;