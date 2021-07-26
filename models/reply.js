import mongoose from 'mongoose'
const Schema = mongoose.Schema

export {
    Reply
}

const replySchema = new Schema({
    author: { type: Schema.Types.ObjectId, ref: "Profile" },
    text: String,
    post: { type: Schema.Types.ObjectId, ref: "Post"}
}, {
    timestamps: true,
})