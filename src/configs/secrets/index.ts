const MongoDB = {
    USERNAME: process.env.MONGODB_USERNAME, // "pravasith",
    PASSWORD: process.env.MONGODB_PASSWORD, //   "1DYZvOQPvqWX4BkF",
    CLUSTER_URI: process.env.MONGODB_CLUSTER_URI, //  "portfolio-2022-db.cb851.mongodb.net",
    DB_NAME: process.env.MONGODB_DB_NAME, //  "Pravasith-Blogs",
}

const Cloudinary = {
    API_KEY: process.env.CLOUDINARY_API_KEY, // "544424448421798",
    API_SECRET: process.env.CLOUDINARY_API_SECRET, // "bJ3r3AKW95taSmooZ2B7goEut4c",
}

const secrets = {
    MongoDB,
    Cloudinary,
}

export default secrets
