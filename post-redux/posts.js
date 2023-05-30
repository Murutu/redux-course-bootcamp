const {createStore} = require("redux")

const initialState = {
    posts: []
}

/*
ACTION
assigning the payload to post based on what the user will post 
*/

const addPostAction = (post) => {
    return {
        type: "ADD_POST",
        payload: post
    }
}

const removePostAction = (id) => {
    return {
        type: "REMOVE_POST",
    }
}

/*
Take the existing data & add the new data => [...state.posts, action.post]
*/

const postReducer = (state=initialState, action) => {
    if(action.type === "ADD_POST") {
        return {
            posts: [...state.posts, action.post]
        }
    } else if (action.type === "REMOVE_POST") {
        return {
            posts: state.posts.filter((post) => {
                return post.id !== action.id
            })
        }
    } else {
        return state;
    }
}

// store

const store = createStore(postReducer);

// subscribe
store.subscribe(() => {
    const data = store.getState();
});

// add post action
store.dispatch(
    addPostAction({
        id: 1,
        title: "Best Course"
    })
)



