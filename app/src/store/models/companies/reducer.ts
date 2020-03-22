import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Company } from './index';
import { GetError, AddError } from './errors';

export interface CompaniesState {
  data: Company[];
  loading: {
    get: boolean;
    add: boolean;
  };
  errors: {
    get: GetError | null;
    add: AddError | null;
  };
}

const initialState: CompaniesState = {
  data: [],
  loading: { get: false, add: false },
  errors: { get: null, add: null }
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
    },

    companyCreated: (state: CompaniesState, action: PayloadAction<Company>) => {
      state.loading.add = false;
      state.errors.add = null;
      state.data.push(action.payload);
    },
    addSetLoading: (state: CompaniesState) => {
      state.loading.add = true;
    },
    addSetErrors: (state: CompaniesState, action: PayloadAction<AddError>) => {
      state.loading.add = false;
      state.errors.add = action.payload;
    }
  }
});

export const { companiesReceived, getSetLoading, getSetErrors } = slice.actions;
export default slice.reducer;