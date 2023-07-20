import { createSlice } from '@reduxjs/toolkit'

const initialValue = {
  videos: [],
}

export const searchSlice = createSlice({
  name: 'search',
  initialState: { value: initialValue },
  reducers: {
    searchVideos: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { searchVideos } = searchSlice.actions
export default searchSlice.reducer
