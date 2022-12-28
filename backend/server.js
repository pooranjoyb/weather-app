import express from 'express'
import cors from 'cors'
import router from './Routes/api.js'

const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.static('./public'));

app.use(express.json());

app.post('/api', router);

app.listen(PORT, () => {
    console.log("App listening at port " + PORT)
})
