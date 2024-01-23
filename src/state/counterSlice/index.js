import { createSlice } from "@reduxjs/toolkit";


const counterSlice  = createSlice({
    name:'counter_slice',
    initialState:{
        count:0,
    },
        reducers:{
            'increment':(state )=>{
                state.count += 1
            },
            'decrement':(state)=>{
                state.count -= 1
            },
            'increment_with_value':(state , action)=>{
                state.count += action.payload
            }
        }
    
})

export const {increment , increment_with_value , decrement} = counterSlice.actions;
export default counterSlice.reducer