import express from 'express'
import dotenv from 'dotenv'
const routes = require('./routes')

dotenv.config()

const app = express()
app.use(express.json())
app.use(routes)

app.listen(process.env.PORT, ()=>{
    console.log(`Está rodando na porta ${process.env.PORT}`)
})