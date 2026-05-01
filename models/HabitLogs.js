import mongoose from 'mongoose'

const habitLogSchema = new mongoose.Schema({
    habitId:String,
    date:String,
    userId:String,
    completed:Boolean,
})

export default mongoose.model("HabitLog",habitLogSchema)