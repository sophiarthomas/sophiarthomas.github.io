import User from '../../model/user.model.js'
export const userController = async (req, res) => {
    // // Create a new portfolio object 
    const firstUser =  await User.find({})
    res.json({firstUser}) 
    console.log({firstUser})  
}