import React from 'react';

import { Button } from '~/components/ui/button';

export function StartQuizPanel() {
  return (
    <div className="bg-darkblue text-white rounded-3xl px-20 pt-3 pb-6 w-full mx-auto ">
      <div className="flex flex-col items-center">
        <div className="w-32 h-32 bg-[#003468] rounded-full -mt-16 mb-4" />
        <div className="text-xl font-semibold">Манап Айдос</div>
        <div className="text-gray-400">@aidosmanap01</div>
        <Button className="bg-lime-500  text-white font-bold py-2 px-4 rounded-full mt-20">
          Начать тест
        </Button>
      </div>
    </div>
  );
}
