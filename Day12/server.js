/**
 * Rate-limiting middleware for Express
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
const express = require('express');
const app = express();
const PORT = 3000;
function rateLimitMiddleware(req, res, next) {
    const limit = 5;
    const windowMs = 60000;
    const ip = req.ip || req.connection.remoteAddress;
    const requestCount = (global.requestCount = global.requestCount || {});
    const currentTimestamp = Date.now();
    requestCount[ip] = requestCount[ip] || { count: 0, timestamp: currentTimestamp };

    if (requestCount[ip].count > limit && currentTimestamp - requestCount[ip].timestamp < windowMs) {
        return res.status(429).json({ error: 'Too many requests, please try again later. :) From ByteWiizard ' });
    }
    requestCount[ip].count += 1;
    requestCount[ip].timestamp = currentTimestamp;
    next();
}
app.get('/request', rateLimitMiddleware,(req, res) => {
    res.json({ message: 'This route is rate-limited.' });
})
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})