import { t } from 'elysia'

export namespace authModel {
    
    export const loginBody = t.Object({
        username: t.String(),
        password: t.String()
    })
    export type loginBody = typeof loginBody.static


    export const registerBody = t.Object({
        username: t.String(),
        password: t.String(),
        confirmPassword: t.String()
    })
    export type registerBody = typeof registerBody.static

    // export const documentSchema = {
    //     tags: ["OCR Image"],
    //     summary: "OCR",
    //     description: "อ่านโพยหวย",
    //     responses: {
    //         200: {
    //             description: "ตัวอย่าง response เมื่อสำเร็จ",
    //             content: {
    //                 "application/json": {
    //                     schema: t.Object({
    //                         success: t.Boolean(),
    //                         requestId: t.String(),
    //                         data: t.Object({
    //                             orders: t.Array(
    //                                 t.Object({
    //                                     number: t.String(),
    //                                     type: t.String(),
    //                                     amount: t.Unsafe<number>({ type: "number" })
    //                                 })
    //                             )
    //                         })
    //                     })
    //                 }
    //             }
    //         },
    //         400: {
    //             description: "Something worng",
    //             content: {
    //                 "application/json": {
    //                     schema: t.Object({
    //                         success: t.Boolean(),
    //                         message: t.Object({})
    //                     })
    //                 }
    //             }
    //         },
    //     }
    // }

    
}
