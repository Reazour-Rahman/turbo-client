import { createSlice } from "@reduxjs/toolkit";


const blogSlice = createSlice({
    name : 'blogs', 
    initialState : {
        count : 0,
        blogDetails : {},
        thumb : "",
        rendering : 0,
    },
    reducers : {
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.count += 1
          },
          decrement: (state) => {
            state.count -= 1
          },
          incrementByAmount: (state, action) => {
            state.count += action.payload
          },
          storeThumb: (state, action) => {
            state.thumb = action.payload
          },
          setRendering: (state, action) => {
            state.rendering = action.payload
          },
    }
})

export const { increment, decrement, incrementByAmount, storeThumb, setRendering } = blogSlice.actions

export default blogSlice.reducer