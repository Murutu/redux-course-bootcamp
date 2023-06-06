const { configureStore, createSlice } = require("redux-logger");

const initialState = {
    counter: 0
};

// createSlice 
const counterSlice = createSlice({
    name: "counter", // were only dealing with 1 data which is counter
    initialState,
    reducers : {
        increment: (state) => {
            state.counter += 1;
        },

        decrement: (state) => {
            state.counter -= 1;
        },

        reset: (state) => {
            state.counter = 0;
        },

        incrementByAmount: (state, action) => {
            state.counter += action.payload
        }
    }
});

// Generate actions
const { increment, decrement, reset, incrementByAmount } = counterSlice.actions;

// Generate reducer
const counterReducer = counterSlice.reducer;

// store
const store = configureStore({
    reducer: counterReducer
});

// dispatch 
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(reset());
store.dispatch(incrementByAmount(200));

console.log(store.getState());