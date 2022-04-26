//installed npm packages
import express from "express";
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()

//imported modules
import dbFunction from "./db/dbConnect.js";
import router from "./routes/routes.js";


//App config
const app = express()

const port = process.env.PORT || 8001;

//Middleware
app.use(cors())
app.use(express.json())
//DB config

//App Endpoints

app.use(router)

//Listener

const connectFunction = async () => {
    try {
        const result = await dbFunction()
        
    if (result !==  undefined) {
        app.listen(port, () => {
            console.log(` mongoDb conected and server listening on local host ${port}`)
        }) 
    }
    } catch (error) {
        res.status(500).send("network hinges")
            console.log(error)
            process.exit(1)  
    }
    
    
}
connectFunction()

