require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.get('/', (req, res) => {
  res.send('Hello Guatemala!');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
