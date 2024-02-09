/**
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Object} next - 
 */
function errorHandler(err,req,res,next){
    if(err.message === "Invalid number"){
        res.status(400).json({message:"Please Provide a Positive Number"});
    }else{
        res.status(500).json({message:"Internal Server Error"});
    }
}
function positiveIntegerHandler(req, res, next) {
    const number = parseInt(req.query.number);
    if(Number.isInteger(number) && number > 0){
        res.json({message:"Success we have received a positive integer"});
    }else{
        const newError = new Error("Invalid number");
        next(newError);
    }
}
const express = require('express');
const app = express();
const PORT = 3000;
app.get('/positive',positiveIntegerHandler);
app.use(errorHandler)
app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`);
});