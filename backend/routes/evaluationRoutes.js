
import express from 'express';
const router = express.Router();
import { create, read, readWithIds, readRecent, addLikes} from '../controllers/evaluationsController.js';

/**
 * Evaluations API routes
 * POST api/evaluations/forms
 * GET api/evaluations?course=course&semester=semester&professor=professor
 * POST api/evaluations/user
 */
router.post('/forms', create);
router.get('/', read);
router.post('/user', readWithIds);
router.get('/recent', readRecent);
router.post('/likes', addLikes);

export default router; 