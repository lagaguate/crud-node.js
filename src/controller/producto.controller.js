const querystring = require('querystring');
const index = (req, res) => {
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
};

const byproductoId = (req, res) => {
   const { id } = req.params;
   fetch(`https://fakestoreapi.com/products/${id}`)
  .then(response => response.json())
  .then(data => res.json(data))
  .catch(error => {
      console.error('Error fetching products:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  });
};

module.exports = {
    index,
    byproductoId
};