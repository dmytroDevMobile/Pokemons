import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../store';
import { fetchList } from '../requests/fetchList';
import { fetchDetails } from '../requests/fetchDetails';
import { ListState } from './types';

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

export const selectList = (state: RootState) => state.pokemonList;

export default listSlice.reducer;