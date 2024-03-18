/* eslint-disable react/no-array-index-key */
/* eslint-disable array-callback-return */
import React from 'react';

import { Facebook, Instagram, Twitter } from 'lucide-react';

import { Logo } from '~/assets/logo';

export function Footer() {
  return (
    <div className="flex h- justify-between items-center px-12 bg-darkblue min-h-[190px]">
      <div className="flex flex-col items-center justify-center gap-2">
        <Logo />
        <div className="text-white">(c) copy right.</div>
      </div>
      <div className="flex-1 flex gap-24 px-24">
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <div key={index} className="text-white">
              О нас
            </div>
          ))}
      </div>
      <div className="flex gap-2">
        <Instagram color="white" />
        <Facebook color="white" />
        <Twitter color="white" />
      </div>
    </div>
  );
}
