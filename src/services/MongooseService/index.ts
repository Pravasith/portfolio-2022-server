import configs from "@configs/index"
import mongoose from "mongoose"

const { uri } = configs.MongoDBConfig

const connect = () => {
    console.log(process.env.MONGODB_PASSWORD, uri)

    mongoose
        .connect(uri)
        .then(() => {
            console.log("Connected to MongoDB!")
        })
        .catch(err => console.error(err))
}

const MongooseService = {
    connect,
}

export default MongooseService
