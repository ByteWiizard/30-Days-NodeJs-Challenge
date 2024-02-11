const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3000;

function authenticationMiddleware(req, res, next) {
    
    const token = req.headers.authorization || req.query.authorization;
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized - No JWT provided' });
    }

    try {
        const decoded = jwt.verify(token, '30 Days Node Js'); 
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Unauthorized - Invalid JWT' });
    }
}

app.get('/protected', authenticationMiddleware, (req, res) => {
    res.json({ message: 'You have access to this protected route!', user: req.user });
});

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
    const secretKey = '30 Days Node Js';
    const userPayload = { userId: '1337', username: 'ByteWiizard' };

    const token = jwt.sign(userPayload, secretKey);
    console.log(`token:->`,token);
});
