const urlAndPath = process.argv.slice(2);
const url = urlAndPath[0];
const path = urlAndPath[1];

const request = require('request');
const fs = require('fs')

request(url, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.

  // Use fs to write the body data to local filesystem
  fs.writeFile(path, body, err => {
    if (err) {
      console.log(err);
    }    
    console.log(`Downloaded and saved ${body.length} bytes to ${path}`)
  })
});
