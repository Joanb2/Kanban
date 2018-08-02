import { connect } from 'react-redux';
import Notes from './Notes';
import { updateNoteRequest, editNote, deleteNoteRequest, moveWithinLane } from './NoteActions';

const mapDispatchToProps = {
	editNote,
	updateNote: updateNoteRequest,
	deleteNote: deleteNoteRequest,
	moveWithinLane,
};

export default connect(null, mapDispatchToProps)(Notes);