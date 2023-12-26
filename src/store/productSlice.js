import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});

/*      Method 1      */
const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: STATUSES.IDLE,
    },
    reducers: {
        setProducts(state, action) {
            // WE CAN NEVER FETCH DATA FROM AN API INSIDE REDUCER
            // Everything needs to be Synchronous within reducer
            // So, we use "thunk mmiddleware"
            state.data = action.payload; 
        },
        setStatus(state, action) {
            state.status = action.payload;
        },
    },
});

export const { setProducts, setStatus } = productSlice.actions;

// THUNKS
export const fetchProducts = () => {
    return async function fetchProductThunk(dispatch, getState) {
        dispatch(setStatus(STATUSES.LOADING));
        try {
            const res = await axios.get('https://fakestoreapi.com/products');
            const products = res.data;

            dispatch(setProducts(products));
            dispatch(setStatus(STATUSES.IDLE));
        } catch (error) {
            console.log(error);
            dispatch(setStatus(STATUSES.ERROR));
        }
    }
}




/*      Method 2      */
// const productSlice = createSlice({
//     name: 'product',
//     initialState: {
//         data: [],
//         status: STATUSES.IDLE,
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchProducts.pending, (state, action) => {
//                 state.status = STATUSES.LOADING;
//             })
//             .addCase(fetchProducts.fulfilled, (state, action) => {
//                 state.data = action.payload
//                 state.status = STATUSES.IDLE;
//             })
//             .addCase(fetchProducts.rejected, (state, action) => {
//                 state.status = STATUSES.ERROR;
//             })
//     }
// });


// THUNKS
// export const fetchProducts = createAsyncThunk('products/fetch', async () => {
//     const res = await axios.get('https://fakestoreapi.com/products');
//     const products = res.data;
//     return products;
// });




export default productSlice.reducer;