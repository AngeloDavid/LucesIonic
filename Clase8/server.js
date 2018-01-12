//console.log('Al fin viernes');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extend:true}));
/*app.get('/play',function (req,res) {
  	res.sendFile(__dirname + '/index.html');
});*/

app.get('/dato',function (req,res) {
  	res.sendFile(__dirname + '/dato.html');
});
app.get('/dato/status',function (req,res) {
	res.header('Access-Control-Allow-Origin' , '*' );
  	res.header('Access-Control-Allow-Credentials', true);
  	res.sendFile(__dirname + '/192.168.0.111.xml');
});

app.post('/quotes',function(req,res){
    console.log(req.body);
});

app.listen(3001,function () {
    console.log('escuchando en el puerto 3000 otro');
});