import { Router } from 'express'
import * as postsCtrl from "../controllers/posts.js"

export {
  router
}

const router = Router()

router.get('/', isLoggedIn, postsCtrl.index)
// router.post('/', isLoggedIn, postsCtrl.create)
// router.get('/:id', isLoggedIn, postsCtrl.show)
// router.post('/:id', isLoggedIn, posts.reply)

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}