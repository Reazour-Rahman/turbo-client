import { createSlice } from "@reduxjs/toolkit";

const firebaseSlice = createSlice({
    name : 'firebase', 
    initialState : {
        isLoading : true,
        admin : false,
        user : {},
        gender : '',
        errorMessage : '',
        toggle : true,
        isLogin : false

    },
    reducers : {
          setUser: (state ,{payload}) => {
            state.user = payload
          },
          setIsLoading: (state,{payload} ) => {
            state.isLoading = payload
          },
          setAdmin: (state,{payload} ) => {
            state.admin = payload
          },
          setGender: (state,{payload} ) => {
            state.gender = payload
          },
          setToggle: (state,{payload} ) => {
            state.toggle = payload
          },
          setErrorMessage: (state,{payload} ) => {
            state.errorMessage = payload
          },
          setIsLogin: (state,{payload} ) => {
            state.isLogin = payload
          },
    }
})

export const { setUser, setIsLoading, setAdmin,setGender,setErrorMessage ,setToggle,setIsLogin} = firebaseSlice.actions

export default firebaseSlice.reducer