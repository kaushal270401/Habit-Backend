import express from "express"
import HabitLogs from "../models/HabitLogs.js"

const router =express.Router()

router.post("/",async(req,res)=>{
    const {habitId ,date , completed} =req.body
    const userId = req.auth.sub

    const log =await HabitLogs.findOneAndUpdate(
        {habitId,date,userId},
        {completed},
        {upsert:true, new:true}
    )

    res.json({success:true,log})
})

router.get("/", async(req, res)=>{
    const userId = req.auth.sub;
    const logs = await HabitLogs.find({userId}).lean();
    res.json({success:true, logs});
})

export default router;

