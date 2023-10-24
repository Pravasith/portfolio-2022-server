require("module-alias/register")

import cors from "cors"
import express from "express"
import path from "path"
import helmet from "helmet"

require("dotenv").config({
    path: path.join(__dirname, "../src/envs/staging.env"),
})

import routes from "@routes/index"
import MongooseService from "@services/MongooseService"

const app = express()
app.use(helmet())

const port = process.env.PORT || 8000 // default port to listen

const corsOptions = {
    origin:
        process.env.NODE_ENV === "production"
            ? ["https://pravasith.com"]
            : ["http://localhost:3000"],
    credentials: true, // <-- REQUIRED backend setting
}

app.use(cors(corsOptions))

app.use(express.json({ limit: "50kb" }))
app.use(express.urlencoded({ extended: true }))

try {
    MongooseService.connect()
} catch (error) {
    console.log(error)
}

app.use("/", routes)

// start the Express server
app.listen(process.env.PORT ?? port, () => {
    console.log(`Server started on port ${port}`)
})
