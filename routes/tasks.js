const express = require("express");
const router = express.Router();

const {getAllTasks,createTask,getTask,updateTask,deleteTask} = require("../controllers/tasks");

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").patch(updateTask).get(getTask).delete(deleteTask);

module.exports = router;