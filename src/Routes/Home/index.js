import store from "../../state/store"
import { increment , decrement , increment_with_value } from "../../state/counterSlice"
import { change_font , change_name } from "../../state/nameSlice"
const Home = ()=>{
    const showState = ()=>{
        console.log(store.getState())
    }
    const dispatchAdd = ()=>{
        store.dispatch(increment())
        console.log(store.getState())
    }
    const dispatchSub = ()=>{
        store.dispatch(decrement())
        console.log(store.getState())
    }
    const dispatchValue = ()=>{
        store.dispatch(increment_with_value(10))
        console.log(increment_with_value({payload:10}))
        console.log(store.getState())
    }
    const changeName = ()=>{
        store.dispatch(change_name('suman'))
        console.log(store.getState())
    }
    return <div>
        <p>From the Home</p>
        <button type="button" onClick={showState}>Click to View state</button>
        <button type='button' onClick={dispatchAdd}>Click to Add</button>
        <button type='button' onClick={dispatchSub} >Click to Sub</button>
        <button type='button' onClick={dispatchValue}>click to add 10</button>
        <button type='button' onClick={changeName} >Chnage Name</button>
        </div>
}

export default Home