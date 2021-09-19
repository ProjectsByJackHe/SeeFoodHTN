

module.exports = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    const { name = 'World' } = req.query;
    res.status(200).send(`Hello ${name}!`);
};