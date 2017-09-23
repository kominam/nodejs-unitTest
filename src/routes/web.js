import express from 'express';
import { index, store } from '../controller/TodoController';

const router = express.Router();

router.get('/api/v1/todos', index);
router.post('/api/v1/todos', store);

export default router;
