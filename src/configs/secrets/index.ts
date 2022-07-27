const MongoDB = {
    USERNAME: process.env.MONGODB_USERNAME,
    PASSWORD: process.env.MONGODB_PASSWORD,
    CLUSTER_URI: process.env.MONGODB_CLUSTER_URI,
    DB_NAME: process.env.MONGODB_DB_NAME,
}

const Cloudinary = {
    API_KEY: process.env.CLOUDINARY_API_KEY,
    API_SECRET: process.env.CLOUDINARY_API_SECRET,
}

const MailGun = {
    API_KEY: process.env.MAILGUN_API_KEY,
    DOMAIN: process.env.MAILGUN_DOMAIN,
    MAIL_TO: process.env.MAIL_TO,
    MAIL_FROM: process.env.MAIL_FROM,
}

const secrets = {
    MongoDB,
    Cloudinary,
    MailGun,
}

export default secrets
