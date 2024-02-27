import { rootRoute } from '@renderer/app/router/root-route';
import { createRoute } from '@tanstack/react-router';
import { LandingPage } from './landing.page';

export const landingRoute = createRoute({ getParentRoute: () => rootRoute, path: '/', component: LandingPage });
