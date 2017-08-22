var express =  require('express');
var app = express();
var router = require('./service_layer/router');


app.use(express.static('src'));
app.all('*',router);



app.listen(process.env.PORT);
console.log('Server started on port 8080');