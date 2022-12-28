import express from "express";
import dotenv from 'dotenv'
import fetch from "node-fetch";
const router = express.Router();

dotenv.config();
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.API_KEY,
        'X-RapidAPI-Host': process.env.API_HOST
    }
};

router.use(express.json())
router.post('/api', (req, res) => {
    console.log("Data requested for " + req.body.city)
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + req.body.city, options)
        .then(response => response.json())
        .then(response => {
            res.send(response);  
            console.log("Server responded with status 200")    
        })
        .catch(err => {
            window.alert(err)
            return;
        });
})

export default router;
