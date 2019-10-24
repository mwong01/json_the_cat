let url = "https://api.thecatapi.com/v1/breeds/search?q=" + process.argv[2];

const request = require('request');
request(url, (error, response, body) => {
  if (body = []) {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
    console.log("No such cat exists");
    return;
  }
  const data = JSON.parse(body);
  console.log(data[0].description);
});


