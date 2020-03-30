var express=require('express');
var app=express();
var mongoose= require('mongoose');
var config=require('./config/database');
var path=require('path');

mongoose.Promise=global.Promise;
mongoose.connect(config.uri,(err)=>{
    if(err){
        console.log('Not connected  '+err);
    }else{
        console.log('Connected')
    }
});

app.use(express.static(__dirname+ '/client/dist/'));

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname+ '/client/dist/index.html'));
});


app.listen(8080,()=>{
    console.log("running on port 8080");
});