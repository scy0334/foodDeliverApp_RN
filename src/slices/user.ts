import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  money: 0,
  accessToken: '',
  phoneToken: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.accessToken = action.payload.accessToken;
    },
    setMoney(state, action: PayloadAction<number>) {
      state.money = action.payload;
    },
    setAccessToken(state, action: PayloadAction<string>) {
      state.accessToken = action.payload;
    },
    setPhoneToken(state, action) {
      state.phoneToken = action.payload;
    },
  },
  extraReducers: builder => {},
});

export default userSlice;
