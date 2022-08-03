import { Response } from "express"
import {
    CallBackOptionsType,
    ResponseObjectType,
    ResponseOptionsType,
} from "./interface"

const handleResponse = async (
    responseOptions: ResponseOptionsType,
    callBackOptions: CallBackOptionsType,
    res: Response
) => {
    const { errorMessage, successMessage, errorStatusCode, successStatusCode } =
        responseOptions
    const { cb, cbArgs } = callBackOptions

    const response: ResponseObjectType = {
        message: errorMessage,
        body: null,
    }

    try {
        response.body = (await cb(...cbArgs)) || null
        response.message = successStatusCode + ": " + successMessage
        res.status(successStatusCode)
    } catch (err) {
        console.error(err)
        response.message = errorStatusCode + ": " + errorMessage
        res.status(errorStatusCode)
    } finally {
        res.send(response)
    }
}

export default handleResponse
