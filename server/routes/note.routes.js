import { Router } from 'express';
import * as NoteController from '../controllers/note.controller';

const router = new Router();

// add a new Note
router.route('/notes').post(NoteController.addNote);

// delete a note
router.route('/notes/:noteId').delete(NoteController.deleteNote);

//edit a note
router.route('/notes/:noteId').put(NoteController.updateNote);

export default router;
