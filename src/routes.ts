import { healthRoutes } from '@gateway/routes/health';
import { Application } from 'express';
import { authRoutes } from '@gateway/routes/auth';
import { searchRoutes } from '@gateway/routes/search';
import { currentUserRoutes } from '@gateway/routes/current-user';

const BASE_PATH = '/api/gateway/v1';
export const appRoutes = (app: Application) => {
  app.use('', healthRoutes.routes());
  app.use(BASE_PATH, authRoutes.routes());
  app.use(BASE_PATH, searchRoutes.routes());
  app.use(BASE_PATH, currentUserRoutes.routes());
};
