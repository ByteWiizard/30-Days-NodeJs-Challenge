const express = require('express');
const app = express();
const port = 3000;
/**

 * @param {Object} req 
 * @param {Object} res 
 */
function greetHandler(req, res) {
    const name = req.query.name || 'Guest';
    console.log(`Hello, ${name}!`)
    res.send(`Hello, ${name}!`);
}

app.get('/greet', greetHandler);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});