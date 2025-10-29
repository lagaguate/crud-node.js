const categorias = [
    { id: 1, nombre: 'Electrónica' },
    { id: 2, nombre: 'Ropa' },
    { id: 3, nombre: 'Hogar' },
];

const index = (req, res) => {
    res.render('categorias/index', { categorias });
};

const detail = (req, res) => {
    const categoria = categorias.find(c => c.id === parseInt(req.params.id));
    if (categoria) {
        res.render('categorias/detail', { categoria });
    } else {
        res.status(404).send('Categoría no encontrada');
    }
};

const create = (req, res) => {
    res.render('categorias/create');
};

const store = (req, res) => {
    const nuevaCategoria = {
        id: categorias.length + 1,
        nombre: req.body.nombre
    };
    categorias.push(nuevaCategoria);
    res.redirect('/categorias');
};

const edit = (req, res) => {
    const categoria = categorias.find(c => c.id === parseInt(req.params.id));
    if (categoria) {
        res.render('categorias/update', { categoria });
    } else {
        res.status(404).send('Edit: Categoría no encontrada');
    }
};

const update = (req, res) => {
    const categoria = categorias.find(c => c.id === parseInt(req.params.id));
    if (categoria) {
        categoria.nombre = req.body.nombre;

        res.redirect('/categorias');
    } else {
        res.status(404).send('Update: Categoría no encontrada');
    }
};

const deleteRecord = (req, res) => {
    console.log('Delete ID:', req.params.id);
    const index = categorias.findIndex(c => c.id === parseInt(req.params.id));
    if (index !== -1) {
        categorias.splice(index, 1);
        res.redirect('/categorias');
    } else {
        res.status(404).send('Categoría no encontrada');
    }
};

const showDeleteConfirm = (req, res) => {
    const categoria = categorias.find(c => c.id === parseInt(req.params.id));
    if (categoria) {
        res.render('categorias/showdelete', { categoria });
    } else {
        res.status(404).send('Categoría no encontrada');
    }
};

module.exports = {
    index,
    detail,
    create,
    store,
    edit,
    update,
    showDeleteConfirm,
    deleteRecord
};