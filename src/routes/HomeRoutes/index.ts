import { RequestHandler } from "express"

export const home: RequestHandler = (_, res) => {
    res.send({
        hello: "Welcome to Pravasith's BE Server!",
    })
}
