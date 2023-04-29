import { configureStore } from '@reduxjs/toolkit'
import recordReducer from './slices/record-slice'

export default configureStore({
    reducer: {
        record: recordReducer
    }
})