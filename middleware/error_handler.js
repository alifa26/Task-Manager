const { CustomAPIError } = require("../errors/custom_error");

CustomAPIError

const errorHandlerMiddleware = (err , req , res , next) => {
    if(err instanceof CustomAPIError){
        return res.status(err.statusCode).json({msg : err.message});
    }
    return res.status(err.status).json({msg : "something went wrong please try again later"});
}

module.exports = errorHandlerMiddleware