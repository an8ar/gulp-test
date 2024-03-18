import React from 'react';

import { Footer } from './footer';
import { Header } from './header';

interface Props {
  children: React.ReactNode;
}

export function MiscLayout({ children }: Props) {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <div className="flex-1 px-10">{children}</div>
      <Footer />
    </div>
  );
}
