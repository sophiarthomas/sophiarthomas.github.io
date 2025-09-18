import mongoose from 'mongoose'; 
const {Schema, model} = mongoose;

const UserSchema = Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter username"],
            unique: true
        },
        email: {
            type: String, 
            unique: true
        },
        age: {
            type: Number, 
        },
        linkedIn: {
            type: String, 
            required: [true, "Please enter a LinkeIn URL"]
        },
        hobbies: {
            type: Array,
            required: false
        },
    },
    {
        timestamps: true
    }
);

const User = model('User', UserSchema);
export default User;