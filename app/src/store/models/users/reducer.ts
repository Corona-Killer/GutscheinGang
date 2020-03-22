import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from './index';

export interface UsersState {
}

const initialState: UsersState = {

};

const slice = createSlice({
  name: 'users',
  initialState,
  reducers: {

  }
});

export const { } = slice.actions;
export default slice.reducer;