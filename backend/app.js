const express = require('express');
const cors = require('cors');
require('./Connection.js'); // Import Database Connection
const { userSchema, blogPostSchema } = require('./Schema.js');
const router = require('./router.js'); 

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Routes
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // allow all or set specific domain
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
console.log("hello congratulation");
app.use('/', router);
app.use(express.json());
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
