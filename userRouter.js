var Router = require('express').Router
var router = Router()
var path = require('path')
router.get('/khachhang',function(req,res,next){
    res.send('user router')
})

router.get('/sum/:num1/:num2',function(req, res, next){
    var sum = parseInt(req.params.num1)+ parseInt(req.params.num2)
    res.send('Tổng Là' + sum)
})






module.exports = router;