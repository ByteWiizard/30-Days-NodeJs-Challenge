


/**
 * 
 * @param {object} req
 * @param {object} res
 * @param {object} next
 */


function requestLoggerMiddleware(req, res, next) {

    const timeStamp = new Date().toISOString();
    const method = req.method;

    console.log(` ${timeStamp} - ${method} request received`);

    next();

}


const express = require('express');
const app = express();
const port = 3000;

app.use(requestLoggerMiddleware);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });


