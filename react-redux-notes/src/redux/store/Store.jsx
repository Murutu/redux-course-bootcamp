import { createStore } from "redux";

import notesReducer from "../reducer/NoteReducer";

const store = createStore(notesReducer);

export default store;