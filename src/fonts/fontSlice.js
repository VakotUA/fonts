import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '112', abbr: "M", color: "#00A653", colorBlindLabel: "green", label: "Merriweather project is led by Sorkin Type", isActive: false },
  { id: '113', abbr: "R", color: "#FE7FC3", colorBlindLabel: "pink", label: "Roboto doesn't compromise, allowing letters", isActive: true },
  { id: '114', abbr: "NS", color: "#046DFF", colorBlindLabel: "blue", label: "Noto Sans covers over 30 scripts", isActive: false }
]

const fontSlice = createSlice({
  name: 'fonts',
  initialState,
  reducers: {
    // fontAdded(state, action) {
    //   state.push(action.payload)
    // },
    select(state, action) {
      const { id } = action.payload

      state.forEach(font => {if(font.id !== id) font.isActive = false})
      const selectedFont = state.find(font => font.id === id)

      if (selectedFont) {
        selectedFont.isActive = !selectedFont.isActive
      }
    }
  }
})

export const { fontAdded, select } = fontSlice.actions

export default fontSlice.reducer