import { configureStore } from '@reduxjs/toolkit'
import fontReducer from '../fonts/fontSlice'

export default configureStore({
  reducer: {
    fonts: fontReducer,
  }
})
