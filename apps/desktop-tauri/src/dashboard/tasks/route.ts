import { createRoute } from '@tanstack/react-router';
import { dashboardRoute } from '../dashboard.route';
import { DashboardTaskPage } from './page';

export const dashboardTaskRoute = createRoute({ getParentRoute: () => dashboardRoute, path: '/tasks', component: DashboardTaskPage });
