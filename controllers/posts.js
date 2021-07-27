import { Post } from '../models/post.js'

export {
    index,
    create,
    postDelete as delete,
    editPost as edit,
    update
}

function update(req, res) {
    Post.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(post => {
        res.redirect('/posts')
    })
}

function editPost(req, res) {
    Post.findById(req.params.id)
    .populate('author')
    .then(post => {
        res.render('posts/edit', {
            post
        })

    })    
}

function postDelete(req, res) {
    Post.findByIdAndDelete(req.params.id)
    .then(() => {
        res.redirect('/posts')
    })
}


function create(req, res) {
    req.body.author = req.user.profile._id
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