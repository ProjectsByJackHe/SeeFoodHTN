const axios = require('axios')


/**
 * 
 * input: A comprehensive image
 * 
 * output: A list of JSON bounding boxes and list of images cropped from those bounding boxes
 * 
 */

module.exports = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    const { name = 'World' } = req.query;
    res.status(200).send(`Hello ${name}!`);
};