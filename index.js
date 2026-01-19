import express from "express";
import {hello, names} from "./routes.js"

//const express = require('express');
const server = express();
const port = 3000;

//A port is a endpoint that tells your computer which application to direct network traffic to

server.get('/hello', function (req, res)
{
    res.send(hello());
});

server.get('/api/names', async function (req, res)
{
    const result = await names();
    res.send(result);
})

server.listen(port, function () 
{
    console.log('Listening on ' + port);
});

