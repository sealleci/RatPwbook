import { configureStore } from '@reduxjs/toolkit'
import navDisplayReducer from './nav_display.ts'

export const store = configureStore({
    reducer: {
        navDisplay: navDisplayReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
