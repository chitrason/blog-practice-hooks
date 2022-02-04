import { Router } from 'express'
import * as blogCtrl from '../controllers/blogs.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
// IF YOU NEED ACCESS TO req.user, IT MUST GO BENEATH:
router.use(decodeUserFromToken)

export { router } 