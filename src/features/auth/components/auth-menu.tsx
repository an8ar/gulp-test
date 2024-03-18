import React from 'react';

import { LogOut } from 'lucide-react';

export function AuthMenu() {
  return (
    <div className="flex h-full items-center gap-16">
      <div className="text-lg text-white font-light">Ansar Serikbayev</div>
      <div>
        <LogOut size={35} className="bg-white rounded-sm p-1" />
      </div>
    </div>
  );
}
