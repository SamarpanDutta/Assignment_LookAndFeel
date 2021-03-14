var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
function reqListener () {
    console.log(this.responseText);
  }
  
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener);
  oReq.open("GET", "https://api.nal.usda.gov/fdc/v1/food/344647?api_key=GfjLqo42UhEqJl5036bQwPN9IRhrE1jJDtRX1y5S");
  oReq.send();


