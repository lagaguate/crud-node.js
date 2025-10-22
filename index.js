require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');
const mainRouter = require('./src/routes/main.router');

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

app.use('/', mainRouter);
app.use('/productos', require('./src/routes/productos.router'));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
