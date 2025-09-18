import { getAllUsers } from './controllers/UserController.js'
import User from '../model/user.model.js'
import express from "express";

const router = express.Router()

// Get all Users 
router.get('/', getAllUsers)

// Add a new user 
router.post('/', async (req, res) => {
  try {
    const user = await User.create(req.body); 
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
})

// Get new users
router.get('/new', (req, res) => {
  res.send("User New Form")
})

// router.route('/:name').get((req, res) => {
//     req.params.name
//     res.send(`Get User with ID ${req.params.body}`)
// }).put((req, res) => {
//     req.params.name
//     res.send(`Put User with ID ${req.params.name}`)
// }).delete((req, res) => {
//     res.send(`Delete ${res.params.name}`)
// })

// // Dynamic parameter /:{}
// router.get((req, res) => {
//     req.params.name
//     res.send(`Get User with ID ${req.params.name}`)})
// router.put('/:name', (req, res) => {
//     req.params.name
//     res.send(`Get User with ID ${req.params.name}`)})

export default router