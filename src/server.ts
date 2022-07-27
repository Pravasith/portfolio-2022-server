process.env.NODE_ENV === "production" && require("module-alias/register")

import cors from "cors"
import express from "express"
import path from "path"
import helmet from "helmet"

process.env.NODE_ENV !== "production" &&
    require("dotenv").config({
        path: path.join(__dirname, "/envs/staging.env"),
    })

import routes from "@routes/index"
import MongooseService from "@services/MongooseService"

const app = express()
// app.use(helmet())

const port = process.env.PORT || 8000 // default port to listen

const corsOptions = {
    origin: ["http://localhost:3000"],
    credentials: true, // <-- REQUIRED backend setting
}

app.use(cors(corsOptions))

app.use(express.json({ limit: "50kb" }))
app.use(express.urlencoded({ extended: true }))

MongooseService.connect()

app.use("/", routes)

// start the Express server
app.listen(process.env.PORT ?? port, () => {
    console.log(`Server started @http://localhost:${port}`)
})
