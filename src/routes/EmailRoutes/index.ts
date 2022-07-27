import EmailService from "@services/EmailService"
import { RequestHandler } from "express"

export const sendEmail: RequestHandler = async (req, res) => {
    let response: any = { message: "text block error" }

    let x = await EmailService.sendEmail()

    console.log({ xx: x })

    res.send("YES")
}
