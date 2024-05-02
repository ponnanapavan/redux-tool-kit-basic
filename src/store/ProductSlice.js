import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState={
    data:[],
}
const productSlice = createSlice({//A Redux slice is a bundle of reducer logic and related actions that manage a specific piece of the application state. Here's how createSlice is useful:
    name: 'product',
    initialState,
    // reducers: {// it only hanles syncronous task but not async 
    //   fetchProducts(state, action){
    //     state.data=action.payload;
    //   }
    // }
    extraReducers:(builder)=>{//You can use extraReducers to handle action types dispatched by thunk action creators or other slices.
        //This is particularly useful for handling asynchronous actions dispatched by thunk action creators or for handling action types from other slices.
        builder.addCase(getProducts.fulfilled, (state,action)=>{
            state.data=action.payload;
        })
    }
});
export const {fetchProducts}=productSlice.actions;

export default productSlice.reducer;

export const getProducts=createAsyncThunk('products/get', async()=>{
    const data= await  fetch('https://fakestoreapi.com/products')
       const response=await data.json();
       return response;

})//createAsyncThunk generate set of actions like fulfilled, rejected, pending

// export function getProducts() // first method use reducx are middle ware to async operations
// {
//     return async function getProductsThunk(dispatch, getState)
//     {
//       const data= await  fetch('https://fakestoreapi.com/products')
//        const response=await data.json();
//        dispatch(fetchProducts(response))
//     }
// }