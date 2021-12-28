import { configureStore } from '@reduxjs/toolkit'
import fontReducer from '../features/fonts/fontSlice'

export default configureStore({
  reducer: {
    fonts: fontReducer,
  }
})