const express = require('express');
const hello = express();
const port = process.env.PORT|| 3000;
const bodyParser = require('body-parser');

hello.get("/", (req, res)=>{
    res.send({name: "John Boy"});
});

hello.post("/", (req, res)=>{
    res.send({name: "John"});
});

hello.listen("/", ()=>{
    console.log({name: "John"});
});

hello.require("/", (req, res)=>{
    res.send({name: "John"});
});