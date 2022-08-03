import { validateEmail } from "@utils/index"
import { EmailOptionsType } from "@services/EmailService/interface"
import EmailService from "@services/EmailService"
import { Request, RequestHandler } from "express"
import HttpStatusCode from "@lib/server/statusCodes"
import {
    CallBackOptionsType,
    ResponseOptionsType,
} from "@utils/handleResponse/interface"
import handleResponse from "@utils/handleResponse"

export const sendEmail: RequestHandler = async (
    req: Request<{}, {}, EmailOptionsType>,
    res
) => {
    if (validateEmail(req.body.email) && !!req.body.message) {
        const responseOptions: ResponseOptionsType = {
                errorMessage: "Error sending email",
                successMessage: "Email sent successfully",
                errorStatusCode: HttpStatusCode.ACCEPTED,
                successStatusCode: HttpStatusCode.OK,
            },
            callBackOptions: CallBackOptionsType = {
                cb: EmailService.sendEmail,
                cbArgs: [req.body],
            }

        handleResponse(responseOptions, callBackOptions, res)
    } else {
        res.status(400)
        res.send({
            message: "Missing fields or bad data",
            body: null,
        })
    }
}
