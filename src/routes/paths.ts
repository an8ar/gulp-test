function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_HOME = '';
const ROOTS_USER = '/user';

export const PATH_AUTH = {
  root: ROOTS_HOME,
  login: path(ROOTS_HOME, '/login'),
  register: path(ROOTS_HOME, '/register'),
};

export const PATH_PAGE = {
  home: '/',
  page403: '/403',
  page404: '/404',
  page500: '/500',
};

export const PATH_USER = {
  takeQuiz: path(ROOTS_USER, '/take-quiz'),
  quizResult: (quizId: number) => path(ROOTS_USER, `/${quizId}/chef-orders`),
};

export const PATH_USERS = {
  profile: path(ROOTS_USER, '/profile'),
};
