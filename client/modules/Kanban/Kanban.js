import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Lanes from '../Lane/Lanes';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { compose } from 'redux';
import { createLaneRequest, fetchLanes } from '../Lane/LaneActions';


// Import Style
import styles from '../Lane/Lane.css';

const name = 'hi';

const Kanban = (props) => (
	<div>
		<button 
		onClick={() => props.createLane({
			name,
		})}
		>Add Lane</button>
		<Lanes lanes={props.lanes}/>
	</div>
);

Kanban.need = [() => { return fetchLanes(); }];

const mapStateToProps = state => ({
  lanes: Object.values(state.lanes)
});

const mapDispatchToProps = {
	createLane: createLaneRequest,
};

Kanban.propTypes = {
	lanes: PropTypes.array,
	createLane: PropTypes.func,
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	DragDropContext(HTML5Backend)
)(Kanban);
