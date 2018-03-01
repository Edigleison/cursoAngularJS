var express = require('express');
var app = express();

app.use(express.static(__dirname + '/'));

app.get('/customers', function (req, res) {
    console.log('/customers');
    var customers = [
            {
                name: "John",
                adress: {
                    city: "New Yourk"    
                }
            },
            {
                name: "Dave",
                adress: {
                    city: "Los Angeles"    
                }
            }
        ];
    res.json(customers);
    res.status(500).json({ error: 'message' });
    return ;
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});