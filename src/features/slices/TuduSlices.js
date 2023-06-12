import {createSlice} from "@reduxjs/toolkit";


const cartsSlice =  createSlice({
        name: 'carts',
        initialState: {
            search: '',
            todos: []
        },
    reducers: {
        text: (state, action) => {
       state.search = action.payload
        },
        arr: (state, action) => {
      state.todos = action.payload
        },
    }
    }
)
const {
   text,
    arr
} = cartsSlice.actions;
export  { text, arr };
export default cartsSlice.reducer