import { configureStore,getDefaultMiddleware } from '@reduxjs/toolkit'
import blogReducer from './slices/blogSlice'
import firebaseReducer from './slices/firebaseSlice'
export const store = configureStore({
  reducer: {
    blog : blogReducer,
    firebase : firebaseReducer
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
})