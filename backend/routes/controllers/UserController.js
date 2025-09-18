import User from '../../model/user.model.js'

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        console.log(req.query.name)
        res.status(200).json(users)
    } catch(error) {
        res.status(500).json({message: error.message});
    }
};

export const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id)
        if (user) {
            res.status(200).json(user)
        } else {
            return res.status(404).json({message: "User not found"})
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const postUser = async (req, res) => {
    try {
        const user = await User.create(req.body); 
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const putUserById = async (req, res) => {
    try {
        const { id } = req.params; 
        const user = await User.findByIdAndUpdate(id, req.body, {new: true, runValidators: true}); 
        if (!user) {
            return res.status(404).json({message: "User not found"}); 
        }
        const updatedUser = await User.findById(id); 
        res.status(200).json(user)
    } catch(error) {
        res.status(500).json({message: error.message});
    }
}

export const deleteUserById = async (req, res) => {
    try {
        const { id } = req.params; 
        const deletedDoc = await User.findByIdAndDelete(id)
        if (deletedDoc) {
            console.log('User document deleted:', deletedDoc);
        } else {
            console.log('Document not found.');
            return res.status(404).json({message: "User not found"})
        }
    } catch(error) {
        res.status(500).json({message: error.message})
    }
}