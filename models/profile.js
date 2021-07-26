import mongoose from 'mongoose'

export {
  Profile
}

const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  biography: String,
  posts: { type: Schema.Types.ObjectId, ref: "Post" }
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)