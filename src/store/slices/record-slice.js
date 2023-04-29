import { createSlice } from '@reduxjs/toolkit'

export const recordSlice = createSlice({
    name: 'record',
    initialState: {
        collection: []
    },
    reducers: {
        initialize: (state, action) => {
            state.collection = action.payload
        }
    }
})

export const { initialize } = recordSlice.actions
export default recordSlice.reducer