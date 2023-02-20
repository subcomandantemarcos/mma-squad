import { Header } from '@libs/shared/ui/header';
import { ReactElement, ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps): ReactElement {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
}
