const index = (req, res) => {
    res.render('index');
};

const private = (req, res) => {
    res.sendFile('index.html', { root: 'private' });
};


module.exports = {
    index, private,
};