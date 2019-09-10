import express from 'express';
import bookController from '../controller/bookController';

const router = express.Router();

router.get('/:title', bookController.getByTitle);
router.post('/title', bookController.createBook);

module.exports = router;