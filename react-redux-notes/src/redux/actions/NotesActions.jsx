/*
1st Step will be the initialState of the application 

2. Action creators/ actions:
* Add note action creator
* Delete note action creator (whenever you want to delete something always pass in the ID)
* Fetch note action creator

Action types/constants enable us to avoid errors => We do this by creating separate a file

3. Reducer
4. Store
5. Dispatch
*/

import { ADD_NOTE, DELETE_NOTE, FETCH_NOTES } from "./NotesActionsType";

// Add Notes
export const addNoteAction = note => {
    return {
        type: ADD_NOTE,
        payload: note
    };
};

// Delete Note
export const deleteNoteAction = id => {
    return {
        type: DELETE_NOTE,
        payload: id
    };
};

// Fetch Note

export const fetchNotesAction = () => {
    return {
        type: FETCH_NOTES
    }
}

