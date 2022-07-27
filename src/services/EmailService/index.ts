import nodemailer from "nodemailer"
import mailGun from "nodemailer-mailgun-transport"

const sendEmail = async () => {
    const mailGunConfig = {
        // GOOGLE
        auth: {
            api_key: "f7026656193ca675b918c3ae1cd986fa-835621cf-5456a0bb",
            domain: "sandboxdb241c050e1c49f0b3175bdf92146ea0.mailgun.org",
        },

        // YAHOO
        // auth: {
        //     api_key: "1e89aa7e68111fb89b4445cc0ed80808-835621cf-d83909f1",
        //     domain: "sandbox6f01cd06d869451785534ac346b372d6.mailgun.org",
        // },
    }

    const transporter = nodemailer.createTransport(mailGun(mailGunConfig))

    const mailOptions = {
        from: "pravasith@gmail.com",
        to: "pravasith@yahoo.com",
        subject: "TESTING 123",
        text: "Ileana D'Cruz is smoking hot 2",
    }

    let x = await transporter.sendMail(mailOptions)

    return x
}

const EmailService = {
    sendEmail,
}

export default EmailService
