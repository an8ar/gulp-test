import React from 'react';

import { Logo } from '~/assets/logo';
import { AuthMenu } from '~/features/auth';

export function Header() {
  return (
    <div className="flex justify-between items-center px-12 h-[98px]  bg-darkblue">
      <Logo />
      <AuthMenu />
    </div>
  );
}
