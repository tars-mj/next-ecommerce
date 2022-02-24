import { useRouter } from 'next/router';
import React from 'react';
import { NavLink } from './NavLink';

export const Header = () => {
  const { asPath } = useRouter();
  console.log(asPath);
  return (
    <header className="max-w-5xl mx-auto w-full">
      <nav className="bg-gray-500 px-4 py-2">
        <NavLink exact href="/">
          <a className="m-2">Home</a>
        </NavLink>
        <NavLink href="/about">
          <a className="m-2">About</a>
        </NavLink>
        <NavLink href="/products">
          <a className="m-2">Products</a>
        </NavLink>
      </nav>
    </header>
  );
};
