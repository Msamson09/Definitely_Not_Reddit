import { Post } from '../models/post.js'

export {
    index,
    create,
    show,
}

function show(req, res) {
    
}

function create(req, res) {
    Post.create(req.body)
    .then(res.redirect('/posts'))
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