import express from "express";
import dotenv from 'dotenv'
const router = express.Router();

dotenv.config();

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.API_KEY,
        'X-RapidAPI-Host': process.env.API_HOST
    }
};

router.get('/api', (req, res) => {
    res.send(options)
})

export default router;
