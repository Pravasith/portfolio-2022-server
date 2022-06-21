const USERNAME = "pravasith",
    PASSWORD = "1DYZvOQPvqWX4BkF",
    CLUSTER_URI = "portfolio-2022-db.cb851.mongodb.net",
    DB_NAME = "Pravasith-Blogs"

const uri = `mongodb+srv://${USERNAME}:${PASSWORD}@${CLUSTER_URI}/${DB_NAME}?retryWrites=true&w=majority`

const mongoDBConfig = {
    uri,
}

export default mongoDBConfig
