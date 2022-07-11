import secrets from "@configs/secrets"

const { USERNAME, PASSWORD, CLUSTER_URI, DB_NAME } = secrets.MongoDB

const uri = `mongodb+srv://${USERNAME}:${PASSWORD}@${CLUSTER_URI}/${DB_NAME}?retryWrites=true&w=majority`

const MongoDBConfig = {
    uri,
}

export default MongoDBConfig
