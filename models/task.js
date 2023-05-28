const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
    name : {type:String,
    required : [true , "name must be asigned"],
    trim : true,
    maxlength : [20 , "max length is 20 chars"] },
    completed : {
        type : Boolean,
        default : false
    }
});

module.exports = mongoose.model('Task' , taskSchema);