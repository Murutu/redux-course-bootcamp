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
*/

const { createAction, nanoid } = require("@reduxjs/toolkit");

// initialState
const initialState = {
    counter: 0,
};

// Action creator/ action
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

console.log(incrementBy(14, "Peter")); // takes in 2 args the amount & user