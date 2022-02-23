import Link from 'next/link';

export const Header = () => {
  return (
    <header className="max-w-5xl mx-auto w-full">
      <nav className="bg-gray-500 px-4 py-2">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </nav>
    </header>
  );
};
