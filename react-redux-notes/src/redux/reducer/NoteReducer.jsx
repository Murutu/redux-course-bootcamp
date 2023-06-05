/* eslint-disable no-case-declarations */
// Initialstate

import { ADD_NOTE } from "../actions/NotesActionsType"

const initialState = {
    notes: []
}

// note reducer is a function that takes in the initialState & then the action

const notesReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_NOTE: 
        // new note
        const newNote = {
            id: Math.random(),
            title: action.payload.title,
            content: action.payload.content
        };
        return {
            notes: [...state, newNote] // get the original state & add the new note
        };
        default:
            return state;
    }
}

export default notesReducer;

