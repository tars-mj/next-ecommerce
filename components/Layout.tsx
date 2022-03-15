import { ReactNode } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  );
};
