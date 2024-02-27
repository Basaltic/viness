import { createRoute } from '@tanstack/react-router';
import { settingsRoute } from '../settings.route';
import { SettingsDisplayPage } from './page';

export const displaySettingsRoute = createRoute({
    getParentRoute: () => settingsRoute,
    path: '/display',
    component: SettingsDisplayPage,
});
