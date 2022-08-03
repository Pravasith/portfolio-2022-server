import HttpStatusCode from "@lib/server/statusCodes"

export type ResponseOptionsType = {
    errorMessage: string
    successMessage: string
    errorStatusCode: HttpStatusCode
    successStatusCode: HttpStatusCode
}

export type CallBackOptionsType = {
    cb: (...args: any[]) => Promise<any>
    cbArgs: any[]
}

export type ResponseObjectType = {
    message: string
    body: any
}
