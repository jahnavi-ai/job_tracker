import express from 'express';
import auth from '../middleware/auth.js';
import { createJob, getJobs } from '../controllers/jobController.js';

const router = express.Router();

router.use(auth); // all routes below need auth

router.post('/', createJob);
router.get('/', getJobs);

// Add update and delete routes here...

export default router;
