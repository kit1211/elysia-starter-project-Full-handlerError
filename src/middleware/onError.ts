import { Elysia } from "elysia";

export const onError = (app: Elysia) => app.onError(({ error, request, set, code }) => {
    let message: string | object = 'Unknown error';
    switch (code) {
        case 'NOT_FOUND':
            set.status = 404;
            message = {
                method: request.method,
                url: request.url,
                message: `not a valid endpoint.`
            };
            break;
        case 'PARSE':
            set.status = 400;
            message = 'Bad Request';
            break;
        case 'VALIDATION':
            set.status = 400;
            // message = error.validator.Errors(error.value).First().message
            const firstError = error.all[0];
            if (firstError && 'path' in firstError) message = firstError ? firstError : error.message;
            // console.log(message)
            break;
        case 'INVALID_FILE_TYPE':
            set.status = 400;
            message = 'INVALID_FILE_TYPE';
            break;
        case 'UNKNOWN':
            if ('status' in error && typeof error.status === 'number') {
                set.status = error.status;
            } else {
                set.status = 500;
            }
            message = error.message;
            break;
        case 'INTERNAL_SERVER_ERROR':
            set.status = 500;
            message = 'Internal Server Error';
            break;
    }
    return Response.json({
        success: false,
        message: message,
    })
})
