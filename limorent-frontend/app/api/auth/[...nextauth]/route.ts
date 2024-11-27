/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Login", type: "text", placeholder: "mail@mail.com" },
                password: { label: "Hasło", type: "password" }
            },
            async authorize(credentials, req) {
                const user = { id: "1", name: "Jan Kowalski", email: "jan.kowalski@mail.com" }

                if (user) {
                    return user
                } else {
                    return null
                }
            }
        })
    ]
})

export { handler as GET, handler as POST }