import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

export interface IUser extends mongoose.Document {
    username: String
}

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
})

userSchema.plugin(uniqueValidator)

const User = mongoose.model<IUser>('User', userSchema)

export default User
