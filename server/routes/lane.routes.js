import { Router } from 'express';
import * as LaneController from '../controllers/lane.controller';

const router = new Router();

// get all lanes 
router.route('/lanes').get(LaneController.getLanes);

// add a new lane
router.route('/lanes').post(LaneController.addLane);

// delete a lane by laneId
router.route('/lanes/:laneId').delete(LaneController.deleteLane);

export default router;
