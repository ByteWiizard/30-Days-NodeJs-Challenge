const express = require('express');
const app = express();
const port = 3000;
function cachingMiddleware(req, res, next) {
  const cacheKey = req.url;
  const cachedResponse = cachingMiddleware.cache[cacheKey];
  if (cachedResponse) {
    console.log('Cached response found.');
    return res.send(cachedResponse);
  }
  const cacheExpirationTime = 60000; // 1 minute
  const originalSend = res.send;
  res.send = function (body) {
    cachingMiddleware.cache[cacheKey] = body;
    console.log('Response cached.');
    setTimeout(() => {
      delete cachingMiddleware.cache[cacheKey];
      console.log('Cache expired for', cacheKey);
    }, cacheExpirationTime);

    originalSend.call(this, body);
  };
  next();
}
cachingMiddleware.cache = {};
app.use(cachingMiddleware);
app.get('/example', (req, res) => {
  const responseData = 'This is a cached response.';
  console.log("here",cachingMiddleware.cache);
  res.send(responseData);
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
