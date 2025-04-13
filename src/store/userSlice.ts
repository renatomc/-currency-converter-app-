import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  name: string;
  surname: string;
  country: string;
  email: string;
  primaryColor: string;
  secondaryColor: string;
}

const initialState: UserState = {
  name: '',
  surname: '',
  country: '',
  email: '',
  primaryColor: '#0070f3',
  secondaryColor: '#7928ca',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData(state, action: PayloadAction<UserState>) {
      return { ...state, ...action.payload };
    },
    clearUserData() {
      return initialState;
    },
    updateColors(state, action: PayloadAction<{ primaryColor: string; secondaryColor: string }>) {
      state.primaryColor = action.payload.primaryColor;
      state.secondaryColor = action.payload.secondaryColor;
    }
  },
});

export const { setUserData, clearUserData, updateColors } = userSlice.actions;
export default userSlice.reducer;
