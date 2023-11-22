import express from 'express';
import dotenv from 'dotenv';
import 'dotenv/config'
import cors from 'cors';
import bodyParser from 'body-parser';

dotenv.config();

const app = express()
const PORT = process.env.PORT || 3030

app.use(express.json())
app.use(bodyParser.json())
app.use(cors());


app.get("/server/time",async (_, res) => {
    try {
        const serverTime = new Date().toLocaleTimeString()
        res.json({ serverTime })
    } catch (error){
        console.error("Erreur lors de la récupération des données")
        res.status(500).json({ error: 'Erreur serveur' })
    } 
})

app.get("/hello/:userName" , async (req, res) => {
    res.send("petit" + req.params.userName)
    //const {userName} = req.params
    //res.json({message: userName})
})

app.listen(PORT, () =>{
    console.log(`Le serveur fonctionne sur le port ${PORT}`);
})