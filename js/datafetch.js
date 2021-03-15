const axios = require('axios');
const instance = axios.create({
  baseURL: 'https://developer.nps.gov/api/v1',
  method: 'get',
  timeout: 1000,
});

instance.get('/activities?api_key=2tS2OFbpx613f4rFH61hm1KlduyObzOhyLVBXwBh')
.then((response)=> {
  objects = response.data['data'];
  for (const obj of objects) {
     for(const property in obj){
       console.log(`${property}: ${obj[property]}`);
     }
   }
})
.catch(function (error){
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log(error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log('Error', error.message);
  }
});



