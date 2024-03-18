import React from 'react';

import { Page } from '~/components/Page';
import { Input } from '~/components/ui/input';

export function LoginPage() {
  return (
    <div className="p-10">
      <Page title="Login">
        <h5>here should be login</h5>
        <div className="w-96">
          <Input className="rounded-full" />
        </div>
      </Page>
    </div>
  );
}
