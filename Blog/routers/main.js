/**
 * Created by 78248 on 2017/2/7.
 */
var express = require('express');
var router = express.Router();//创建路由对象

router.get('/',function(req,res,next){
    console.log(req.userInfo)
    res.render('main/index.html',{
        userInfo:req.userInfo
    });
})
module.exports=router;