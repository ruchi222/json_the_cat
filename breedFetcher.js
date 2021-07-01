const request = require('request');
//const { callback } = require('util');

const fetchBreedDescription = (breed, callback) => {
    const page = 'https://api.thecatapi.com/v1/breeds/search?q=${breed}';
    request(page, (error, response, body) => {
        const data = JSON.parse(body);
        console.log(data);
        console.log(typeof data);
        if (error) {
            callback(error, null);
        }
        if (data[0]) {
            callback(null, data[0].description);
        } else {
            callback("Could not find breed", null);
        }
    });
};
module.exports = fetchBreedDescription;
