import { Post } from '../models/post.js'

export {
    index,
    create,
    postDelete as delete,
    editPost as edit,
    update,
    show,
    addReply,
    deleteReply
}

function deleteReply(req, res) {
    //find the post
    //find the reply
    //delete the reply
    Post.findById(req.params.postId)
    .then(post => {
        post.replies.remove({_id: req.params.replyId})
        post.save()
        res.redirect(`/posts/${post._id}`)
    })
}

function addReply(req, res) {
    req.body.author = req.user.profile._id
    //find the post
    //add the reply
    Post.findById(req.params.id)
    .then(post => {
        post.replies.push(req.body)
        post.save()
        .then(() => {
            res.redirect(`/posts/${post._id}`)
        })
    })
}

function show(req, res) {
    Post.findById(req.params.id)
    .populate('author')
    .populate({
        path: 'replies',
        populate: {
            path: 'author'
        }
    })
    .then(post => {
        res.render('posts/show', {
            title: 'Show',
            post
        })
    })
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
            title: "Edit Post",
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
           title: "Definitely-Not-Reddit",
           posts 
        })
    })
}