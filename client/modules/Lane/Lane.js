import React from 'react';
import PropTypes from 'prop-types';
import NoteContainer from '../Note/NoteContainer';
import Edit from '../../components/Edit';

// Import Style
//import styles from './Lane.css';

const Lane = (props) => {
	const { connectDropTarget, lane, laneNotes, editLane, createNote, updateLane, deleteLane } = props;
	const laneId = lane.id;
	return connectDropTarget(
		<div >
			<div >
				<div >
					<button onClick={() => createNote({task: 'New Note'}, laneId)}>Add Note</button>
				</div>
				<Edit 
					
					editing={lane.editing}
					value={lane.name}
					onValueClick={() => editLane(lane.id)}
					onUpdate={name => updateLane({...lane, name, editing: false})}
				/>
				<div >
					<button onClick={() => deleteLane(laneId)}>Remove Lane</button>
				</div>
			</div>
			<NoteContainer
				notes={lane.notes}
				laneId={laneId}
			/>
		</div>
	);
};

Lane.propTypes = {
	lane: PropTypes.object,
	laneNotes: PropTypes.array,
	addNote: PropTypes.func,
	updateLane: PropTypes.func,
	deleteLane: PropTypes.func,
	editLane: PropTypes.func,
};


export default Lane;