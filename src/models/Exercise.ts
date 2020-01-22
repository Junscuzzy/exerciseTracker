import mongoose from 'mongoose'

export interface IExercise extends mongoose.Document {
  userId: String,
  description: String,
  duration: Number,
  date: String
}

const exerciseSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, required: true },
})

const Exercise = mongoose.model<IExercise>('Exercise', exerciseSchema)

export default Exercise
