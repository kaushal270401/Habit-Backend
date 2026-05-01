import mongoose from "mongoose";

const habitSchema = new mongoose.Schema({
    userId:String,
    title:String,
    category:String,
    icon:String
})
export default mongoose.model("Habit",habitSchema)