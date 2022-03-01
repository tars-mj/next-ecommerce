import { ReactNode } from 'react';

interface MainProps {
  children: ReactNode;
}

export const Main = ({ children }: MainProps) => {
  return (
    <main className="max-w-5xl mx-auto w-full flex-grow p-6 grid gap-6 sm:grid-cols-2 bg-teal-100">
      {children}
    </main>
  );
};
