class SendResponse {
    private message: string
    private body: any
    private error: any

    constructor(
        message: string = "Contact Backend",
        body: any = null,
        error: any = null
    ) {
        this.message = message
        this.body = body
        this.error = error
    }

    public get getMessage() {
        return this.message
    }

    public set setMessage(message: string) {
        this.message = message
    }

    public get getBody() {
        return this.body
    }

    public set setBody(body: any) {
        this.body = body
    }

    public get getError() {
        return this.error
    }

    public set setError(error: any) {
        this.error = error
    }
}

export default SendResponse
