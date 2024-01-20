
import express from 'express';
const router = express.Router();
import { create, remove, update, read, readWithIds, readRecent, addLikes, totalReviews} from '../controllers/evaluationsController.js';
import {validateToken} from '../utils/checkToken.js';

/**
 * Evaluations API routes
 * POST api/evaluations/forms
 * GET api/evaluations?course=course&semester=semester&professor=professor
 * POST api/evaluations/user
 */


router.post('/forms', validateToken, create);
router.get('/', read);
router.post('/user', readWithIds);
router.get('/recent', readRecent);
router.post('/likes', addLikes);
router.get('/totalReviews', totalReviews);
router.put('/forms/:id', validateToken, update);
router.delete('/forms/:id', validateToken, remove);

export default router; 