import { Router } from "express"
import dotenv from "dotenv"

// import urls from "./urls"

dotenv.config()

const router = Router()

router.get("/", (req, res) => {
    req
    res.send({
        hello: "Pravasith's BE Server!",
    })
})

export default router
