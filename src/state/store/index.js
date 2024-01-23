import { configureStore  , combineReducers} from "@reduxjs/toolkit";

import counterReducer from "../counterSlice";
import nameReducer from "../nameSlice";


const rootReducer = combineReducers({
    counterSlice:counterReducer ,
    nameSlice:nameReducer
})

const store = configureStore({
    reducer:rootReducer
})

export default store