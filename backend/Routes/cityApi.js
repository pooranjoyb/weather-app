import express from "express";
import dotenv from 'dotenv'
import fetch from "node-fetch";
const cityApi = express.Router();

dotenv.config();
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.API_KEY,
        'X-RapidAPI-Host': process.env.API_HOST
    }
};

cityApi.use(express.json())
cityApi.post('/cityApi', (req, res) => {
    console.log("Data requested for " + req.body.city)
    fetch('https://' + process.env.API_HOST + '/v1/weather?city=' + req.body.city, options)
        .then(response => response.json())
        .then(response => {
            res.send(response);  
            console.log("Server responded with status 200")    
        })
        .catch(err => {
            console.log(err)
            return;
        });
})

export default cityApi;
