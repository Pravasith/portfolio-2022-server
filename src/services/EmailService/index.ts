import configs from "@configs/index"
import nodemailer from "nodemailer"
import mailGun from "nodemailer-mailgun-transport"
import { EmailOptionsType } from "./interface"

const sendEmail = async (emailOptions: EmailOptionsType) => {
    const { name, email, message } = emailOptions

    const mailGunConfig = configs.MailGunConfig
    const { mailGunOptions, mailTo, mailFrom } = mailGunConfig

    const transporter = nodemailer.createTransport(mailGun(mailGunOptions))

    const mailOptions = {
        from: mailFrom,
        to: mailTo,
        subject: `WEBMAIL:: a message from ${name?.slice(0, 30)}`,
        text: `Sender email: ${email}. Message: ${message}`,
    }

    const emailResponse = await transporter.sendMail(mailOptions)
    return emailResponse
}

const EmailService = {
    sendEmail,
}

export default EmailService
