import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import db from "@/lib/db";

export const { handlers, auth, signIn, signOut } = NextAuth({

    providers: [

        Credentials({

            credentials: {
                email: {},
                password: {}
            },

            async authorize(credentials) {

                const result = await db.query(
                    "SELECT * FROM users WHERE email = $1",
                    [credentials.email]
                );

                const user = result.rows[0];

                if (!user) return null;

                const valid = await bcrypt.compare(
                    credentials.password as string,
                    user.password
                );

                if (!valid) return null;

                return {
                    id: String(user.id),
                    name: user.name,
                    email: user.email
                };

            }

        })

    ],

    session: {
        strategy: "jwt",
        maxAge: 60 * 60
    },

    pages: {
        signIn: "/login"
    }

});