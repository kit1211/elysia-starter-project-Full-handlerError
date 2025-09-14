import { Elysia } from 'elysia'
import { authModel } from './model'
import { authService } from './service'
import jwt from 'jsonwebtoken'
import { Err } from '@/error'


export const auth = new Elysia()
    .post("/login", async ({ body, set }) => {
        const user = await authService.findUserByUsername(body.username)
        if (!user) {
            set.status = 401
            throw new Err( "Invalid credentials", 401)
        }

        const isMatch = await Bun.password.verify(body.password, user.password)
        if (!isMatch) {
            set.status = 401
            throw new Err( "Invalid credentials", 401)
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || 'secret', { expiresIn: '1h' })
        return {
            token
        }

    }, {
        body: authModel.loginBody
    })

    .post("/register", async ({ body, set }) => {
        try {
            const user = await authService.register(body)
            set.status = 201
            return user
        } catch (e: any) {
            set.status = 400
            throw new Err(e.message, 401)
        }
    }, {
        body: authModel.registerBody
    })
