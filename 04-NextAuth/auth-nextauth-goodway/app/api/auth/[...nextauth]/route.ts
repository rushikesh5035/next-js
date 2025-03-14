import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Login with email",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "example@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const username = credentials?.username;
        const password = credentials?.password;

        //db req to check if this username andd pass are correcct
        return (user = {
          name: "rushikesh",
          id: 1,
          username: "rushikesh@gmail.com",
        });

        if (user) {
          return username;
        } else {
          return null;
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };
