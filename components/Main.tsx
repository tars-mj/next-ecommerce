import { ReactNode } from 'react';

interface MainProps {
  children: ReactNode;
}

export const Main = ({ children }: MainProps) => {
  return (
    <main className="max-w-7xl mx-auto w-full flex-grow p-6 py-20 bg-gray-100">{children}</main>
  );
};
