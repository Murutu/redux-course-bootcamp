/*
initialState
Action creator - Action
Reducer
Store 

Customise create action (To customise it we will create a callback function)
const incrementBy = createAction("INCREMENT_BY", (amount, user) => {
    return {
        payload: {
            amount: amount => If the key & the value or the same we can pass amount only same thing for user
            amount,
            user,
            id:nanoid()
        }
    }
});


Pass in the amount I want to use to increase the counter & the user adding the number to the counter

createReducer(initialState, (builder) => {
    builder.addCase(increment, (state) => { // inside our callback function we can make changes to the state
        state.counter // we r directly mutating the state bcz of the immer package
    })
})
*/

const { createAction, nanoid, createReducer, configureStore } = require("@reduxjs/toolkit");

const logger = require("redux-logger").createLogger();

// initialState
const initialState = {
    counter: 0,
};

// Action creator/ action / createAction
const increment = createAction("INCREMENT");
const decrement = createAction("DECREMENT");
const resetCounter = createAction("RESET");

// Customise create action
const incrementBy = createAction("INCREMENT_BY", (amount, user) => {
    return {
        payload: {
            amount,
            user,
            id: nanoid()
        }
    }
})

// console.log(incrementBy(14, "Peter")); // takes in 2 args the amount & user

// createReducer builder callback
const counterSlice = createReducer(initialState, (builder) => {
    builder.addCase(increment, (state) => {
        state.counter += 1;
    });
    builder.addCase(decrement, (state) => {
        state.counter -= 1;
    });
    builder.addCase(resetCounter, (state) => {
        state.counter = 0;
    });
    builder.addCase(incrementBy, (state,action) => {
        state.counter += action.payload.amount
    })
});

// Store

const store = configureStore({
    reducer: counterSlice,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// Dispatch action
store.dispatch(increment());


console.log(store.getState());
