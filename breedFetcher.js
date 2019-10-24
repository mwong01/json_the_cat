const request = require('request');
const fetchBreedDescription = function(breedName, callback) {
  request.get('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      if (data[0] === undefined) {
        callback(null,"No cat exists");
      } else {
        callback(null, data[0].description);
      }
    }
  });
};

module.exports = { fetchBreedDescription };