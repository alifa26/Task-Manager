const Task = require("../models/task");
const asyncWrapper = require('../middleware/async');
const createCustomError = require("../errors/custom_error");

const getAllTasks = asyncWrapper(async (req,res) => {
    
        const tasks = await Task.find();
        res.status(200).json(tasks);
   
})

const createTask = asyncWrapper(async (req,res) => {

        const task = await Task.create(req.body);
        res.status(201).json({task});

})

const getTask = asyncWrapper(async (req,res) => {

        const {id:taskId} = req.params;
        const task = Task.findOne({_id:taskId});
        if(!task){
            return res.status(404).json({message : "no task available at that id"});
        }
        res.status(200).json({task});

})

const deleteTask = asyncWrapper(async(req,res) => {

        const {id:taskId} = req.params;
        const task = await Task.findOneAndDelete({_id:taskId});
        if(!task){
            return res.status(404).json({message : "no task available at that id"});
        }
        res.status(200).json({task});

})

const updateTask = asyncWrapper(async (req,res) => {

        const {id : taskId} = req.params;
        const task = await Task.findOneAndUpdate({_id:taskId},req.body , {
            new : true,
            runValidators : true,
        });
        if(!task){
                const error = new Error("not found");
                return next(createCustomError(err.message , err.status)); 
        }
        re.status(200).json({task});
  
})

module.exports = {getAllTasks,
createTask,
getTask,
updateTask,
deleteTask};