import { rootRoute } from '@renderer/app/router/root-route';
import { createRoute } from '@tanstack/react-router';
import { AuthenticationPage } from './auth.page';

export const authRoute = createRoute({ getParentRoute: () => rootRoute, path: '/auth', component: AuthenticationPage });
