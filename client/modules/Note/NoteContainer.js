import { connect } from 'react-redux';
import Notes from './Notes';
import { editNote, updateNoteRequest, deleteNoteReqest, moveWithinLane } from './NoteActions';

const mapDispatchToProps = {
	onValueClick: editNote,
	onUpdate: updateNoteRequest,
	onDelete: deleteNoteReqest,
	moveWithinLane,
};

export default connect(null, mapDispatchToProps)(Notes);