import { Router } from 'express'
import * as postsCtrl from "../controllers/posts.js"

export {
  router
}

const router = Router()

router.get('/', isLoggedIn, postsCtrl.index)
router.post('/', isLoggedIn, postsCtrl.create)
router.get('/:id', isLoggedIn, postsCtrl.show)
router.delete('/:id', isLoggedIn, postsCtrl.delete)
router.put('/:id', isLoggedIn, postsCtrl.update)
router.get('/:id/edit', isLoggedIn, postsCtrl.edit)
router.post('/:id/replies', isLoggedIn, postsCtrl.addReply)

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}