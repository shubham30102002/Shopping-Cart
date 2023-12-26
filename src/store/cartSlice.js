// Slice is provided by redux-toolkit
// It helps to organise the store data in small pieces

const { createSlice } = require("@reduxjs/toolkit");

const initialState = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {     // reducers are basically function with which we can mutate our states
        add(state, action) {
            /// Redux
            // return [... state, action.type]      // we cannot mutate our states directly
            state.push(action.payload);     // with the help of react-toolkit we can directly mutate our states but internally it follows "14th line"
        },
        remove(state, action) {
            return state.filter((item) => item.id !== action.payload);
        },
    }
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;