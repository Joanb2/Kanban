import Lane from '../models/lane';
import Note from '../models/note';
import uuid from 'uuid';

export function getSomething(req, res) {
  return res.status(200).end();
}

export function addLane(req, res) {
	if (!req.body.name) {
		res.status(403).end();
	}

	const newLane = new Lane(req.body);

	newLane.notes = [];

	newLane.id = uuid();
	newLane.save((err, saved) => {
		if (err) {
			res.status(500).send(err);
		}

		res.json(saved);
	});
}

export function getLanes(req, res) {
	Lane.find().exec((err, lanes) => {
		if (err) {
			res.status(500).send(err);
		}
		res.json({ lanes });
	});
}

export function deleteLane(req, res) {
	Lane.findOne({ id: req.params.laneId }).exec((err, lane) => {
		lane.notes.forEach((note) => {
			Note.findOne({ id: note.id}).exec((_, note) => {
				note.remove();
			});
		})
		if (err) {
			res.status(500).send(err);
		}
		lane.remove(() => {
			res.status(200).end();
		});
	});
}

export function updateName(req, res) {
	Lane.update({ id: req.params.laneId }, { name: req.body.name}).exec((err, name) => {
		if (err) {
			res.status(err).send(err);
		}
		res.json({ name });
	});
}
