import { createRoute } from '@tanstack/react-router';
import { settingsRoute } from '../settings.route';
import { SettingsNotificationsPage } from './page';

export const notificationsSettingsRoute = createRoute({
    getParentRoute: () => settingsRoute,
    path: '/notifications',
    component: SettingsNotificationsPage,
});
