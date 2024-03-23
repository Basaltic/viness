import { landingRoute } from '../landing/landing.route';
import { authRoute } from '../authentication/auth.route';
import { rootRoute } from './root-route';

export const routeTree = rootRoute.addChildren([authRoute, landingRoute]);
