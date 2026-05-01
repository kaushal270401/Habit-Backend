import express from 'express'
import Habit from '../models/Habit.js'
import HabitLog from '../models/HabitLogs.js'
import {calculateStreak} from '../utils/calculateStreak.js'

const router = express.Router()

router.post("/",async(req,res)=>{
   const {title ,category ,icon}=req.body

   const habit = await Habit.create({
    userId:req.auth.sub,
    title,
    category,
    icon
   })

   res.json({success:true,habit})
})

router.delete("/:id",async(req,res)=>{
   const {id}=req.params
   console.log(id);

   const habit = await Habit.deleteOne({
    userId:req.auth.sub,
    _id:id
   })

   res.json({success:true,habit})
})

router.get("/",async(req,res)=>{
    const userId = req.auth.sub;
    const habits = await Habit.find({userId:userId})

    res.json({success:true,habits})
})

export default router

router.get("/streak/:id",async(req,res)=>{
   const {id}=req.params
   const logs  = await HabitLog.find({habitId:id}).select('date completed').lean()   
   const streak = calculateStreak(logs);
   res.json({success:true,streak})  
})