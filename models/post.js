import mongoose from 'mongoose'
const Schema = mongoose.Schema

export {
    Post
}

const replySchema = new Schema({
    author: { type: Schema.Types.ObjectId, ref: "Profile" },
    text: String,
    post: { type: Schema.Types.ObjectId, ref: "Post"}
}, {
    timestamps: true,
})

const postSchema = new Schema ({
    title: String,
    text: String,
    author: { type: Schema.Types.ObjectId, ref: "Profile" },
    replies: [replySchema]
}, {
    timestampes: true,
})

const Post = mongoose.model("Post", postSchema)