import { 
  getAllUsers, 
  getUserById, 
  postUser,
  putUserById,
  deleteUserById 
} from './controllers/UserController.js'
import express from "express";

const router = express.Router()

router
  .route('/')
  .get(getAllUsers)
  .post(postUser)

router.get('/new', (req, res) => {
  res.send("User New Form")
})

router
  .route('/:id')
  .get(getUserById)
  .put(putUserById)
  .delete(deleteUserById)

export default router