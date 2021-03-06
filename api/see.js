const axios = require('axios')


/**
 * 
 * input: A comprehensive image
 * 
 * output: A list of JSON bounding boxes and list of images cropped from those bounding boxes
 * 
 */

module.exports = (req, res) => {
    
    const { name = 'World' } = req.query;
    res.status(200).send(`Hello ${name}!`);
};