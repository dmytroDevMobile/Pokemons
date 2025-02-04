import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../store';
import { fetchList } from '../requests/fetchList';
import { fetchDetails, PokemonDetails } from '../requests/fetchDetails';

export interface PokemonListItem {
  name: string;
  url: string;
  details: PokemonDetails;
}

interface ListState {
  list: PokemonListItem[];
  count: number;
  status?: 'idle' | 'loading' | 'failed';
}

const initialState: ListState = {
  list: [],
  count: 0,
  status: 'idle',
};


export const getListAsync = createAsyncThunk('pokemonList/fetchList', async (skip: number) => {
  const data = await fetchList(20, skip);
  const detailedListPromises = data?.list?.map((item) => fetchDetails(item.name));
  const detailedData = await Promise.all(detailedListPromises);

  return {...data, list: data?.list?.map((item, idx) => ({ ...item, details: detailedData[idx] }))};
});

export const listSlice = createSlice({
  name: 'pokemonList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getListAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getListAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.list = [...state.list, ...action.payload.list];
        state.count = action.payload.count;
      });
  },
});

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectList = (state: RootState) => state.pokemonList;

export default listSlice.reducer;