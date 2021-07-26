import mongoose from 'mongoose'
const Schema = mongoose.Schema

export {
    Post
}

const postSchema = new Schema ({
    title: String,
    text: String,
    author: { type: Schema.Types.ObjectId, ref: "Profile" },
}, {
    timestampes: true,
})