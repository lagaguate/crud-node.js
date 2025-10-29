// index.js
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');
const layouts = require('express-ejs-layouts');
const mainRouter = require('./src/routes/main.router');
const methodOverride = require('method-override');

// Method Override Middleware
app.use(methodOverride('_method'));

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

// Layouts
app.use(layouts);
app.set('layout', 'layouts/layout');

// Routes
app.use('/', mainRouter);
app.use('/productos', require('./src/routes/productos.router'));
app.use('/contacto', require('./src/routes/contacto.router'));
app.use('/categorias', require('./src/routes/categorias.router'));

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
