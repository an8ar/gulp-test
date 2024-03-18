/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';

import { Route } from 'react-router-dom';

import { MiscLayout } from '~/layout/misc';
import { lazyImport } from '~/utils/lazyImport';

const { ProfilePage } = lazyImport(() => import('./profile-page'), 'ProfilePage');
const { QuizPage } = lazyImport(() => import('./quiz-page'), 'QuizPage');
const { TakeQuizPage } = lazyImport(() => import('./take-quiz-page'), 'TakeQuizPage');

export const UserRoutes = [
  <Route
    path="profile"
    element={
      <MiscLayout>
        <ProfilePage />
      </MiscLayout>
    }
    key="profile"
  />,
  <Route
    path="quiz:id"
    element={
      <MiscLayout>
        <QuizPage />
      </MiscLayout>
    }
    key="profile"
  />,
  <Route
    path="take-quiz"
    element={
      <MiscLayout>
        <TakeQuizPage />
      </MiscLayout>
    }
    key="profile"
  />,
];
