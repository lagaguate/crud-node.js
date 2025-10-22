require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const mainRouter = require('./src/routes/main.router');
app.use('/', mainRouter);

app.use('/productos', require('./src/routes/productos.router'));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
