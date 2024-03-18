import React from 'react';

import { Page } from '~/components/Page';
import { UpdateProfile } from '~/features/profile';
import { StartQuizPanel } from '~/features/quiz';
import { MiscLayout } from '~/layout/misc';

export function ProfilePage() {
  return (
    <MiscLayout>
      <Page title="Профиль">
        <div className="flex flex-wrap p-10 gap-10 items-start">
          <div className="flex-[6_6_0%]">
            <UpdateProfile />
          </div>
          <div className="flex-[2_2_0%]">
            <StartQuizPanel />
          </div>
        </div>
      </Page>
    </MiscLayout>
  );
}
