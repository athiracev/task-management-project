const mongoose=require('mongoose')

const taskSchema = new mongoose.Schema({
    title:{type:String,require:true},
    description:String,
    status:{type:String,enum:['pending','in progress','completed'],default:'pending'},
    assignedTo:{type:mongoose.Schema.Types.ObjectId,ref:'User'}
})

module.exports=mongoose.model('Task',taskSchema)