import { dbConnect } from '@/libs/mongoose/db-connect';
import { User } from '@/libs/mongoose/models';
import { usersZodSignin } from '@/libs/zod/schemas';
import bcrypt from 'bcryptjs';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

// Types
interface CustomUser {
  email: string;
  name: string;
}

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        await dbConnect();

        // Parse and validate request body
        const { data } = usersZodSignin.safeParse(credentials);
        const { email, password } = data!;
        const user = await User.findOne({ email }).select('+password');
        const doesPasswordMatch = await bcrypt.compare(password, user.password);
        if (!user && !doesPasswordMatch) throw new Error('Invalid credentials');
        return user;
      },
    }),
  ],
  pages: { signIn: '/signin' },
  session: { strategy: 'jwt' },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user;
      return token;
    },
    async session({ session, token }) {
      session.user = token.user as CustomUser;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
