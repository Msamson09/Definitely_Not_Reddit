import mongoose from 'mongoose'
const Schema = mongoose.Schema

export {
  Profile
}

const profileSchema = new Schema({
  name: String,
  avatar: String,
  biography: String,
  posts: { type: Schema.Types.ObjectId, ref: "Post" }
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)