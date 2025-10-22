const index = (req, res) => {
    res.sendFile('index.html', { root: 'private' });
};
module.exports = {
    index,
};