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

server.post('/', function(req,res,next){
    res.json(req.body)
})


server.get('/login',function(req, res, next){
    res.json('Abc')
})

var isLogin = false;

server.post('/login', function(req,res,next){
    if(req.body.username === 'admin'&& req.body.password==='1234' ){
        "Chúc Mừng Đã Đăng Nhập Thành Công"
    } else{
        res.redirect('/login')
    }
})

server.get('/', function(req, res, next){
    res.sendFile(path.join(__dirname,'index.html'))
})
server.listen(process.env.PORT|| 3000,function(){
    console.log('listen on 3000')
})