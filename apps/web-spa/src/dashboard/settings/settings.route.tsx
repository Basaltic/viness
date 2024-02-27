import { createRoute } from '@tanstack/react-router';
import { dashboardRoute } from '../dashboard.route';
import { SettingsLayout } from './settings-layout';

export const settingsRoute = createRoute({
    getParentRoute: () => dashboardRoute,
    path: '/settings',
    component: SettingsLayout,
});
