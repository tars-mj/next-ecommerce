import { useRouter } from 'next/router';
import React from 'react';
import { NavLink } from './NavLink';
import { SearchIcon, ShoppingBagIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import { CartBar } from './Cart/CartBar';

export const Header = () => {
  return (
    <header className="fixed z-50 inset-x-0 top-0 bg-white shadow">
      <nav aria-label="Top" className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className=" px-4 pb-14 sm:px-0 sm:pb-0">
          <div className="h-16 flex items-center justify-between">
            {/* Logo */}
            <div className="flex-1 flex">
              <NavLink exact href="/">
                <a className="mt-2">
                  <Image
                    className="w-auto"
                    src="https://firebasestorage.googleapis.com/v0/b/monthly-expenses-13681.appspot.com/o/logo.svg?alt=media&token=745524f6-98a0-4a10-9cfc-ef16b8b4f911"
                    alt="logo"
                    width="150"
                    height="40"
                  />
                </a>
              </NavLink>
            </div>
            <div className="flex-1 items-center flex justify-center">
              <NavLink exact href="/">
                <a className="p-4">Home</a>
              </NavLink>
              <NavLink href="/products">
                <a className="p-4">Products</a>
              </NavLink>
              <NavLink href="/about">
                <a className="p-4">About</a>
              </NavLink>
            </div>

            <div className="flex-1 flex items-center justify-end">
              {/* Search */}
              <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                <span className="sr-only">Search</span>
                <SearchIcon className="w-6 h-6" aria-hidden="true" />
              </a>

              <CartBar />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
