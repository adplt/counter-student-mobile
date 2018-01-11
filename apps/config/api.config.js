import env from './env.config';
export const SERVER_URL = env.URL;

export const endpoints = {
  LOGIN: '/GiboxCaseMobile/Service.svc/Login',
  VALIDATE_STUDENT: '/users',
};

export const mockResponses = env.fixtures || {};
