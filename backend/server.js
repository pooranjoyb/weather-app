import express from 'express'
import cors from 'cors'
import cityApi from './Routes/cityApi.js'
import placesApi from './Routes/placesApi.js';

const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.static('./public'));

app.use(express.json());


app.post('/cityApi', cityApi);
app.get('/placesApi', placesApi);

app.listen(PORT, () => {
    console.log("App listening at port " + PORT)
})
