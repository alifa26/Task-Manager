const mongoose = require("mongoose");


const connectDB = (urll) =>{
    return mongoose.connect(urll , console.log("connected"));    
    
}

module.exports = connectDB;