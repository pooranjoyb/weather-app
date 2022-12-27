import express from 'express'
import cors from 'cors'

const app = express();

const PORT = 3000

app.use(cors());
app.use(express.static('./public'));

app.listen(PORT, () => {
    console.log("App listening at port " + PORT)
})
