import { createSlice } from "@reduxjs/toolkit";

const nameSlice = createSlice({
    name:'name_slice',
    initialState: {
        name:'raam'
    },
    reducers:{
        'change_name':(state, action)=>{state.name =action.payload },
        'change_font':(state, action)=>{state.name = 'Ramm'}
    }
})

export const {change_font , change_name} = nameSlice.actions
export default nameSlice.reducer