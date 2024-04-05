import { createSlice } from '@reduxjs/toolkit'

export const checkAuthentication = createSlice({
  name: 'loginUser',
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    loginUser: (state) => {
      state.isAuthenticated = true
    },
    logOutUser: (state) => {
      state.isAuthenticated = false
    }
  },
})

// Action creators are generated for each case reducer function
export const { loginUser, logOutUser } = checkAuthentication.actions

export default checkAuthentication.reducer