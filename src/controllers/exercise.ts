import { Request, Response } from 'express'

import User from '../models/User'
import Exercise from '../models/Exercise'

export function addUser(req: Request, res: Response) {
  const user = new User({
    username: req.body.username,
  })

  user.save()
    .then(() => res.status(201).json({
      _id: user._id,
      username: user.username,
    }))
    .catch((error) => res.status(500).json({ error }))
}

export function getUsers(req: Request, res: Response) {
  User.find()
    .then((users) => res.status(200).json(users))
    .catch((error) => res.status(400).json({ error }))
}

export function addExercise(req: Request, res: Response) {
  const exercise = new Exercise({
    ...req.body,
    date: req.body.date || new Date(),
  })

  const {
    userId, description, duration, date,
  } = exercise

  exercise.save()
    .then(() => res.status(201).json({
      userId, description, duration, date,
    }))
    .catch((error) => res.status(500).json({ error }))
}

// export function getLog(req: Request, res: Response) {
//   res.status(200).json({ msg: 'get log' })
// }
