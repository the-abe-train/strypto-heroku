const express = require('express');
const jwt = require('jsonwebtoken');
const fs = require('fs/promises');
const cors = require('cors');
const path = require('path');

const port = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

// JWT
// require('dotenv').config()

// app.post('/login', async (req, res) => {

//   // Authenticate user
//   const rawUsers = await fs.readFile('./users.json');
//   const users = JSON.parse(rawUsers);
//   const findInDb = users.find(val => {
//     console.log(val.user, val.pass);
//     const u = val.user === req.body.username;
//     const p = val.pass === req.body.password;
//     return u && p;
//   });

//   if (findInDb) {

//     // JWT
//     const username = req.body.username;
//     const user = { name: username };

//     const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
//     res.json({ accessToken })

//   } else {

//     console.log('login failed');
//     res.json({ accessToken: null })

//   }

// })

// function authenticateToken(req, res, next) {
//   const authHeader = req.headers['authorization'];
//   const token = authHeader.split(' ')[1];
//   if (token == null) return res.sendStatus(401);
//   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//     if (err) return res.sendStatus(403);
//     req.user = user;
//     next();
//   });
// }

app.use(express.static('public'));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});
app.listen(port, () => {
  console.log(`Server is up at port ${port}`);
});


