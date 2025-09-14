import { db } from "@/lib/db";
import { authModel } from "./model";

export abstract class authService {
    
    static async register(body: authModel.registerBody) {
        const { username, password, confirmPassword } = body;

        if (password !== confirmPassword) {
            throw new Error("Passwords do not match");
        }

        const existingUser = await db.user.findUnique({
            where: { username },
        });

        if (existingUser) {
            throw new Error("User already exists");
        }

        const hashedPassword = await Bun.password.hash(password);

        const user = await db.user.create({
            data: {
                username,
                password: hashedPassword,
            },
        });

        return {
            id: user.id,
            username: user.username,
        }
    }

    static async findUserByUsername(username: string) {
        return await db.user.findUnique({
            where: {
                username
            }
        })
    }
}
