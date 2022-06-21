import mongoose from "mongoose"
import configs from "../configs"

const { uri } = configs.mongodbConfig

const connectToMongoDBWithMongoose = () => {
    mongoose
        .connect(uri)
        .then(() => {
            console.log("Connected to MongoDB!")
        })
        .catch(err => console.error(err))
}

const mongooseService = { connectToMongoDBWithMongoose }

export default mongooseService
