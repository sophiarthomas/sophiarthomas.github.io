import mongoose from 'mongoose'; 
const {Schema, model} = mongoose;

const ExperienceSchema = Schema(
    {
        company: {
            type: String,
            required: true 
        },
        title: {
            type: String, 
            required: true
        }

    }
)

const Experience = model('Experience', ExperienceSchema);
export default Experience;