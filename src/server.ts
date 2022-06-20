import cors from "cors"
import express from "express"

import routes from "./routes"

const app = express()
const port = 8000 // default port to listen

const corsOptions = {
    origin: ["http://localhost:3000"],
    credentials: true, // <-- REQUIRED backend setting
}

app.use(cors(corsOptions))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/", routes)

// start the Express server
app.listen(process.env.PORT ?? port, () => {
    console.log(`Server started @http://localhost:${port}`)
})
