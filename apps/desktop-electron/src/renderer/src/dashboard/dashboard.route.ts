import { rootRoute } from '@renderer/app/router/root-route';
import { createRoute } from '@tanstack/react-router';
import { DashboardLayout } from './dashboard-layout';

export const dashboardRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/app',
    component: DashboardLayout,
});
