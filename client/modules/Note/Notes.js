import React, { Proptypes } from 'react';
import Note from './Note';
//import styles from './Notes.css';
import Edit from '../../components/Edit';

const Notes = ({ notes, laneId, editNote, updateNote, moveWithinLane }) => {
	return (
		<ul className="notes">{notes.map((note) => 
			<Note 
				id={note.id}
				key={note.id}
				moveWithinLane={moveWithinLane}
				laneId={laneId}
			>
				<Edit 
					editing={note.editing}
					value={note.task}
					onValueClick={() => editNote(note.id)}
					onUpdate={task => updateNote({
						...note,
						task,
						editing: false,
						}
					)}
					onDelete={() => deleteNote(note.id, laneId)}
				/>
			</Note>
		)}</ul>
	)
};

Notes.proptypes = {
	deleteNote: Proptypes.func,
	updateNote: Proptypes.func,
	moveWithinLane: PropTypes.func,
	laneId: Proptypes.string,
	editNote: Proptypes.func,
	notes: Proptypes.array,
};

export default Notes;