import express from "express";
import fetch from "node-fetch";
const placesApi = express.Router();

placesApi.use(express.json());
placesApi.get('/placesApi', (req, res) => {

    fetch("https://places-api-q5mi.onrender.com/placesData").then(response => response.json()).then(response => {
        res.send(response);
    })
        .catch(err => console.log(err));
})

export default placesApi;

