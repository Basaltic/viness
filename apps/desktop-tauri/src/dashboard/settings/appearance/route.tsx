import { createRoute } from '@tanstack/react-router';
import { settingsRoute } from '../settings.route';
import { SettingsAppearancePage } from './page';

export const appearanceSettingsRoute = createRoute({
    getParentRoute: () => settingsRoute,
    path: '/appearance',
    component: SettingsAppearancePage,
});
