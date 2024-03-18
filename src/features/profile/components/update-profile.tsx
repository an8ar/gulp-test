import React from 'react';

import { UpdateProfileForm } from './update-profile-form';

export function UpdateProfile() {
  return (
    <div className="flex-1 bg-darkblue rounded-3xl px-10 py-8">
      <div className="text-white text-sm font-semibold mb-8">Изменить Профиль</div>
      <UpdateProfileForm />
    </div>
  );
}
