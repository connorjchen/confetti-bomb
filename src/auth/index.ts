import NextAuth, { User, NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const BASE_PATH = "/api/auth";

const authOptions: NextAuthConfig = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "connorjchen@gmail.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<User | null> {
        // TODO(connor): replace with prisma db query
        // TODO(connor): try headers and no headers - i assume header needed if backcend on different server
        const users = [
          {
            id: "test-user-1",
            userName: "test1",
            name: "Test 1",
            password: "pass",
            email: "test@test.com",
          },
        ];
        const user = users.find((user) => user.email === credentials.email && user.password === credentials.password);
        return user ? { id: user.id, name: user.name, email: user.email } : null;
      },
    }),
  ],
  basePath: BASE_PATH,
  secret: process.env.NEXTAUTH_SECRET,
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);