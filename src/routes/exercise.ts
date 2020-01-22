import express from 'express'

import {
  addExercise, addUser, getUsers,
} from '../controllers/exercise'

const router = express.Router()

router.get('/users', getUsers)
router.post('/add', addExercise)
router.post('/new-user', addUser)

// Get user's exercise log
// GET /api/exercise/log?{userId}[&from][&to][&limit]
// router.get('/log?', getLog)


export default router
