import React from 'react';
import Proptypes from 'prop-types';
import Lane from './LaneContainer.js';

const Lanes = ({ lanes }) => {
	return (
		<div className="lanes">{lanes.map(lane =>
			<Lane className="lanes" key={lane.id} lane={lane} />
		)}</div>
	);
};

Lanes.propTypes = {
	lanes: Proptypes.array,
};

export default Lanes;