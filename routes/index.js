import { Router } from 'express'
import passport from 'passport'

const router = Router()

export {
    router
}

router.get('/', isLoggedIn, function(req, res) {
    res.render('posts/index.ejs', {
        title: "Definitely Not Reddit",
        
    })
})

function isLoggedIn(req, res, next) {
    console.log(req.isAuthenticated())
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }