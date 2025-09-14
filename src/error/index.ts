export class Err extends Error {
	constructor(public message: string, public status: number) {
		super(message, { cause: status })
	}
	toResponse() {
		return Response.json({
            success: false,
			message: this.message,
		}, {
			status: this.status
		})
	}
}