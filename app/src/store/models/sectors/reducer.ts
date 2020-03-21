import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Sector } from './index';
import { GetError } from './errors';

export interface SectorsState {
  data: Sector[];
  loading: {
    get: boolean;
  };
  errors: {
    get: GetError | null;
  };
}

const initialState: SectorsState = {
  data: [],
  loading: {
    get: false
  }, errors: {
    get: null
  }
};

const slice = createSlice({
  name: 'sectors',
  initialState,
  reducers: {
    sectorsReceived: (state: SectorsState, action: PayloadAction<Sector[]>) => {
      state.loading.get = false;
      state.errors.get = null;
      state.data = action.payload;
    },
    getSetLoading: (state: SectorsState) => {
      state.loading.get = true;
    },
    getSetErrors: (state: SectorsState, action: PayloadAction<GetError>) => {
      state.loading.get = false;
      state.errors.get = action.payload;
    }
  }
});

export const { sectorsReceived, getSetLoading, getSetErrors } = slice.actions;
export default slice.reducer;