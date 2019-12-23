var express =require('express')
var server = express()
var fs = require('fs')
var path = require('path')


server.use(express.urlencoded())


var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}
server.use(allowCrossDomain)

server.get('/', function(req,res,next){
    res.json('888888888888888888888')
})
server.listen(process.env.PORT|| 3000,function(){
    console.log('listen on 3000')
})