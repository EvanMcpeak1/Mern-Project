import express from 'express';
import {getStudent, createStudent} from '../controllers/student.js';
import student from '../models/student.js';
const router = express.Router();

router.get('/', getStudent);
router.post('/', createStudent);


export default router;