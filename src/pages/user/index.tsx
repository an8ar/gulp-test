import React from 'react';

import { Route } from 'react-router-dom';

import { lazyImport } from '~/utils/lazyImport';

const { ProfilePage } = lazyImport(() => import('./profile-page'), 'ProfilePage');
const { QuizPage } = lazyImport(() => import('./quiz-page'), 'QuizPage');
const { TakeQuizPage } = lazyImport(() => import('./take-quiz-page'), 'TakeQuizPage');

export const UserRoutes = [
  <Route path="profile" element={<ProfilePage />} key="profile" />,
  <Route path="quiz:id" element={<QuizPage />} key="profile" />,
  <Route path="take-quiz" element={<TakeQuizPage />} key="profile" />,
];
