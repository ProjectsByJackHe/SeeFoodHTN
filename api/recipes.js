const axios = require('axios')

/**
 * 
 * input: a list of ingredients to search for.
 * - call spoonacular api to find a list of recipes
 * 
 * output: a list of recipes and their missing ingredients
 * - might forward request to twilio API to notify via SMS any missing groceries
 * 
 */

module.exports = (req, res) => {
    
    const { name = 'World' } = req.query;
    res.status(200).send(`Hello ${name}!`);
};