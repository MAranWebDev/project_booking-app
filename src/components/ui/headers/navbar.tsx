import { getServerSession } from 'next-auth';
import Link from 'next/link';

export const Navbar = async () => {
  const session = await getServerSession();

  return (
    <nav>
      <Link href="/">
        <h1>NextAuth</h1>
      </Link>

      <ul>
        {session ? (
          <li>
            <Link href="/dashboard/profile">Profile</Link>
          </li>
        ) : (
          <>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/">Signin</Link>
            </li>
            <li>
              <Link href="/signup">Signup</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
