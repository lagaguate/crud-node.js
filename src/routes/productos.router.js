const express = require('express');
const router = express.Router();
const querystring = require('querystring');

// Ruta para obtener todos los productos
//limite=5&sort=desc
router.get('/', (req, res) => {
   const query = querystring.stringify(req.query);
   console.log('Query Params:', query);

   let url = 'https://fakestoreapi.com/products?' + query;
   console.log('Constructed URL:', url);
   fetch(url)
       .then(response => response.json())
       .then(data => res.json(data))
       .catch(error => {
      console.error('Error fetching products:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  });
});
//limite=5&sort=desc
router.get('/productos_lista', (req, res) => {
   const { limite, sort } = req.query;
   console.log('Query Params:', req.query);
   console.log('Limite:', limite);
   console.log('Sort:', sort);
   let url = 'https://fakestoreapi.com/products';
   if (limite) {
       url += `?limit=${limite}`;
   }
   if (sort) {
       url += `&sort=${sort}`;
   }
   fetch(url)
       .then(response => response.json())
       .then(data => res.json(data))
       .catch(error => {
      console.error('Error fetching products:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  });
});

router.get('/:id', (req, res) => {
   const { id } = req.params;
   fetch(`https://fakestoreapi.com/products/${id}`)
  .then(response => response.json())
  .then(data => res.json(data))
  .catch(error => {
      console.error('Error fetching products:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  });
});
module.exports = router;