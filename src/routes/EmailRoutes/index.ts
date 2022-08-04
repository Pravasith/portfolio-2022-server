import { validateEmail } from "@utils/index"
import { EmailOptionsType } from "@services/EmailService/interface"
import EmailService from "@services/EmailService"
import { Request, RequestHandler } from "express"
import HttpStatusCode from "@lib/server/statusCodes"
import SendResponse from "@utils/SendResponse"

export const sendEmail: RequestHandler = async (
    req: Request<{}, {}, EmailOptionsType>,
    res
) => {
    const sendResponse = new SendResponse()

    try {
        if (validateEmail(req.body.email) && !!req.body.message) {
            await EmailService.sendEmail(req.body)
            sendResponse.setMessage = "Email received and queued"
            sendResponse.setBody = "Email queued."
            res.status(HttpStatusCode.CREATED)
        } else {
            throw new Error("Validation error")
        }
    } catch (e) {
        console.error(e)
        sendResponse.setMessage = "Error sending email"
        sendResponse.setError = "Email not queued."
        res.status(HttpStatusCode.INTERNAL_SERVER_ERROR)
    } finally {
        res.send(sendResponse)
    }
}
