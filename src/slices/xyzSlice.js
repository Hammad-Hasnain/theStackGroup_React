import { createSlice } from "@reduxjs/toolkit"


const initialState = {

}


const xyzSlice = createSlice({
    name: 'xyz',
    initialState,
    reducer: {
        // actions
        xyzHandler(state, actions) {

        }

    }
})


const { actions, reducer } = xyzSlice

export const { xyzHandler } = actions
export default reducer