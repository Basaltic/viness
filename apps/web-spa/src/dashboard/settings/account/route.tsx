import { createRoute } from '@tanstack/react-router';
import { settingsRoute } from '../settings.route';
import { SettingsAccountPage } from './page';

export const accountSettingsRoute = createRoute({
    getParentRoute: () => settingsRoute,
    path: '/account',
    component: SettingsAccountPage,
});
