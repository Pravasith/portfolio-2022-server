import secrets from "@configs/secrets"

const { API_KEY, DOMAIN, MAIL_TO, MAIL_FROM } = secrets.MailGun

const mailGunOptions = {
    auth: {
        api_key: API_KEY || "",
        domain: DOMAIN || "",
    },
}

const mailTo = MAIL_TO || "pravasith@gmail.com"
const mailFrom = MAIL_FROM || "pravasith@outlook.com"

const MailGunConfig = {
    mailGunOptions,
    mailTo,
    mailFrom,
}

export default MailGunConfig
