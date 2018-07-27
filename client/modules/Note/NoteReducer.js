import omit from 'lodash/omit';

// Import Actions
import { CREATE_NOTE, UPDATE_NOTE, DELETE_NOTE, CREATE_NOTES, EDIT_NOTE, MOVE_WITHIN_LANE } from './NoteActions';

// Initial State
const initialState = {};

export default function notes(state = initialState, action) {
	switch (action.type) {
		case CREATE_NOTE:
		case UPDATE_NOTE:
			console.log('note', state, action);
			return { ...state, [action.note.id] : action.note };
		case DELETE_NOTE:
			return omit(state, action.noteId);
		case EDIT_NOTE: {
			const note = { ...state[action.id], editing: true };
			return { ...state, [action.id] : note };
			}
		case CREATE_NOTES: 
			return { ...action.notes };
		case MOVE_WITHIN_LANE: {
			const newLane = { ...state[action.laneId] };
			newLane.notes = moveNotes(newLane.notes, action.sourceId, action.targetId);
			return { ...state, [action.laneId] : newLane };
		}
		default:
			return state;
	}
}