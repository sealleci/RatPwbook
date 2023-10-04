import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from './index.ts'

interface NavDisplayState {
    value: boolean
}

const initialState: NavDisplayState = {
    value: false
}

export const navDisplaySlice = createSlice({
    name: 'nav_display',
    initialState,
    reducers: {
        showNav: (state) => {
            state.value = true
        },
        hideNav: (state) => {
            state.value = false
        }
    }
})

export const { showNav, hideNav } = navDisplaySlice.actions
export const selectNavDisplay = (state: RootState) => state.navDisplay.value
export default navDisplaySlice.reducer
