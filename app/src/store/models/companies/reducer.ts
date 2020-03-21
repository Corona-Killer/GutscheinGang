import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Company } from './index';
import { GetError } from './errors';

export interface CompaniesState {
  data: Company[];
  loading: {
    get: boolean;
  };
  errors: {
    get: GetError | null;
  };
}

const initialState: CompaniesState = {
  data: [],
  loading: { get: false },
  errors: { get: null }
};

const slice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    companiesReceived: (state: CompaniesState, action: PayloadAction<Company[]>) => {
      state.loading.get = false;
      state.errors.get = null;
      state.data = action.payload;
    },
    getSetLoading: (state: CompaniesState) => {
      state.loading.get = true;
    },
    getSetErrors: (state: CompaniesState, action: PayloadAction<GetError>) => {
      state.loading.get = false;
      state.errors.get = action.payload;
    }
  }
});

export const { companiesReceived, getSetLoading, getSetErrors } = slice.actions;
export default slice.reducer;