import express from 'express'

import {
  addExercise, addUser, getUsers, getLog,
} from '../controllers/exercise'

const router = express.Router()

router.get('/users', getUsers)
router.post('/add', addExercise)
router.post('/new-user', addUser)
router.get('/log?:userId:from?:to?:limit?', getLog)

export default router
