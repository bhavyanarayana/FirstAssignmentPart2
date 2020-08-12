var express =  require('express');
var fs = require('fs');
var app = express();
const port = process.env.port || 8080;
app.listen(port, function(err, data){
    console.log('Application is running on port: '+port);
});

app.get('/val', function(req,res){
    var data = fs.readFileSync('Employee.json');
    console.log(data.toString());
    //we can use like this
    //res.setHeader('Content-Type', 'application/json');
    //res.send(data.toString());

    res.json(JSON.parse(data.toString()));

  
});