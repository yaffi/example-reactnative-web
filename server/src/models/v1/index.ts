import express from 'express';
import comment from './comment'

const router: express.Router = express.Router();

router.use('/comment', comment);

export default router;