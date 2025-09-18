// import {getAllExeriences} from './controllers/experienceController.js';
import Experience from '../model/experience.model.js'
import express from "express";

const router = express.Router()

router.get('/', (req, res) => {
    res.send("hello")
})

// Add a new experience 
router.post('/', async (req, res) => {
  try {
    const user = await Experience.create(req.body); 
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
})

export default router