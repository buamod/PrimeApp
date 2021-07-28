const bodyParser = require("body-parser");
const express = require("express");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/prime', (req, res) => {
  const number = req.body.number;
  const result =  isPrime(number)
  res.json(result);
  res.sendStatus(200);

});

app.listen(80, () => {
  console.log("Started on http://localhost:80");
});

function isPrime(value) {
  for(var i = 2; i < value; i++) {
      if(value % i === 0) {
        console.log(value)
          return false;
      }
  }
  console.log(value)
  return value > 1;
}