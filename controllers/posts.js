import { Post } from '../models/post.js'

export {
    index
}

function index(req, res) {
    Post.find({})
    .populate('author')
    .sort({ createdAt: "desc" })
    .then(posts => {
        res.render('posts/index', {
           title: "Forum",
           posts 
        })
    })
}