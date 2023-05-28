const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./controllers/db/connect");
const notFound = require("./middleware/not_found");
const errorHandlerMiddleware = require("./middleware/error_handler");
require("dotenv").config();
/// middleware

app.use(express.json());
app.use(express.static('./public')) ;


//// routes
app.get('/hello' , (req,res) => {
    res.send("Task Manager app");
});

app.use("/api/v1/tasks" , tasks);

app.use(notFound);
app.use(errorHandlerMiddleware);
const port = process.env.PORT || 3000;



const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI); 
        app.listen(port , console.log(`server is listening on port ${port}...`));
    }catch(error){ 
        console.log(error);
    }
}

start();