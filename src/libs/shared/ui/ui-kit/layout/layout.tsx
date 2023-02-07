import React from 'react';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
