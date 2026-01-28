import express, {Request, Response} from "express";
import {routeHello, routeAPINames, routeWeather} from "./routes.js";

//const express = require('express');
const server = express();
const port = 3000;

//A port is a endpoint that tells your computer which application to direct network traffic to

server.get('/hello', function (req: Request, res: Response): void
{
    const response = routeHello();
    res.send(response);
});

server.get('/api/names', 
    async function (req: Request, res:Response): Promise<void>{
        let response: string;
        try{
            response = await routeAPINames();
            res.send(response);
        }catch (err){
            console.log(err);
        }
    }
);

server.get(
    '/api/weather/:zipcode',
    function (req: Request<{ zipcode: string }>, res: Response): void{
        const response = routeWeather({ zipcode: req.params.zipcode });
        res.send(response);
    }
);

server.listen(port, function (): void
{
    console.log('Listening on ' + port);
});

