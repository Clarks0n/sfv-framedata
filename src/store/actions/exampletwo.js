/////// ********** /////////
// Old Traditional 

// actions/index.js
/*
export const Increase = () => ({
  type: 'INCREASE'
})

export const Decrease = () => ({
  type: 'DECREASE'
})
*/

// reducers/index.js
/*
export default (state = 0, action) => {
  switch (action.type) {
    case 'INCREASE':
      return state + 1
    case 'DECREASE':
      return state - 1
    default:
      return state
  }
}
*/

import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increase: state => {
      state.value += 1
    },
    decrease: state => {
      state.value -= 1
    }
  }
})

// each case under reducers becomes an action
export const { increase, decrease } = counterSlice.actions

export default counterSlice.reducer


// *** Import Reducer to Store *** ///

/*
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '.counterSlice' //import our reducer from step 4

export default configureStore({
  reducer: {
    counter: counterReducer //add our reducer from step 4
  }
})
*/

// *** ///


// *** Usage in component *** ///

/*
import { useSelector, useDispatch } from 'react-redux'
import { decrease, increase } from './counterSlice'

export function Counter() {
  const count = useSelector(state => state.counter.value)
  // in our slice, we provided the name property as 'counter'
  // and the initialState with a 'value' property
  // thus to read our data, we need useSelector to return the state.counter.value

  const dispatch = useDispatch()
  // gets the dispatch function to dispatch our actions

  return (
    <div>
        <button onClick={() => dispatch(increase())}>
          Increase
        </button>
        <p>{count}<p>
        <button onClick={() => dispatch(decrease())}>
          Decrease
        </button>
    </div>
  )
}
*/


// *** ///

