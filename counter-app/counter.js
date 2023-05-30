/*
STEPS:

We need to have initial state 1st . This is bcz redux is about state management.
Before we start developing an app using redux we need to 1st have initial state
It will contain the properties we want to keep track of.

After that we want to have the actions, reducer & the store.
The actions we will have 2 types => The action itself & the action creator

ACTION PROPERTIES
-> It's a plain javascript object
-> It has a type field as a property which is required
-> It's an event that occurs in your application
-> It can accept additional properties (payload). This is optional. 
-> A function that returns an action is called an action creator.

REDUCER
A reducer is a function that receives the current state and an action object, decides 
how to update the state based on the action, & returns the new state.

RULES OF REDUCER
-> The new state value should only be calculated based on the state & action arguments.
-> Reducers are not allowed to modify the existing state.
*/

const { createStore } = require("redux"); 

const initialState = {
    count: 0,
}

/*
ACTION
Keeping track of this 4 action types:
-> Increment, Decrement, Reset, increaseByAmount 

{
    type: "INCREMENT";
}
This action is not reusable . If I need the same action in some part of the application unless
unless I write the same syntax multiple times. This is where the action creator comes in.
Im now going to modify it to use a function. 
*/

{
    type: "INCREMENT";
}

// an action with an action creator

const incrementAction = () => {
    return {
        type: "INCREMENT"
    };
};

const decrementAction = () => {
    return {
        type: "DECREMENT"
    };
};

const resetAction = () => {
    return {
        type: "RESET"
    };
};

const increaseByAmount = () => {
    return {
        type: "INCREASE_BY_AMT"
    };
};

/*
REDUCER
We want to make changes to the initialState& we can achieve that based on the reducer
This const counterReducer = () => {} function is going to take 2 arguments
1. Is the current state which is the initialState and the action that is been passed which
for example can be incrementAction

We have the count inside the initialState which is count: 0
So were gonna do state.count + 1 . This will increase it by 1

Reducer always returns new data

This now is a complete reducer
*/

const counterReducer = (state = initialState, action) => {
    if(action.type === "INCREMENT") {
        return {
            count: state.count + 1,        
        }
    } else if (action.type === "DECREMENT") {
        return {
            count: state.count - 1
        }
    } else if (action.type === "RESET") {
        return {
            count: 0
        }
    } else if (action.type === "INCREASE_BY_AMT") {
        return {
            count: state.count + action.payload
        }
    }
}

/* 
STORE
In redux it stores the applications data.
It doesn't contain business logic the business logic lies inside the reducer.
It receives actions & pass to all the registered middleware
The only way to change the state inside it is to dispatch an action

Any time the store receives an action that causes a change to the state, the 
store will notify all the registered listeners(reducers) that a change to the state 
has been made.
This will allow various parts of the system, like the UI, to update themselves according to
the new state

STORE METHODS
getState() => Returns the current state tree of your application
dispatch() => Only way to trigger state change
subscribe() => Listening to any change

payload contains additional information that we can use to make changes to our store
*/

const store = createStore("counterReducer");

// subscribe to store (callback function)
store.subscribe(() => {
    const data = store.getState();
    console.log(data);
});

// get state
// const stateData = store.getState();

// dispatch action
store.dispatch(incrementAction());
store.dispatch(decrementAction());

// dispatch action with payload
store.dispatch(increaseByAmount(10));

