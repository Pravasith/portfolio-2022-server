import { EmailOptionsType } from "@services/EmailService/interface"
import EmailService from "@services/EmailService"
import { Request, RequestHandler } from "express"

export const sendEmail: RequestHandler = async (
    req: Request<{}, {}, EmailOptionsType>,
    res
) => {
    let response: any = { message: "Email error" }

    try {
        response = await EmailService.sendEmail(req.body)
    } catch (err) {
        console.error(err)
    } finally {
        res.send(response)
    }
}
