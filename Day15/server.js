/**
 * Logging middleware for Express
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
function loggingMiddleware(req, res, next) {
    const timestamp = new Date().toISOString();
    const method = req.method;
    const url = req.originalUrl || req.url;
    const headers = req.headers;
    const body = req.body;;
    console.log(`timestamp: [${timestamp}]\n method: ${method} \n url: ${url}`);
    console.log('Headers:', headers);
    console.log('Body:', body);
    next();
  }
  const express = require('express');
  const app = express();
  app.use(loggingMiddleware);
  const PORT = 3001;
  app.get('/hello',(req, res) =>{
    res.send('Hello From ByteWiizard :))');
  })
  app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
  });
  