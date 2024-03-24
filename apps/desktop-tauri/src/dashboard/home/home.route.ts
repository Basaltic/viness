import { createRoute } from '@tanstack/react-router';
import { DashboardHomePage } from './home.page';
import { dashboardRoute } from '../dashboard.route';

export const dashboardHomeRoute = createRoute({ getParentRoute: () => dashboardRoute, path: '/', component: DashboardHomePage });
