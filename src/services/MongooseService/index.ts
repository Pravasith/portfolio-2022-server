import configs from "@configs/index"
import mongoose from "mongoose"

const { uri } = configs.MongoDB

const connect = () => {
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
