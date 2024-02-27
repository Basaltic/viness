import { createRoute } from '@tanstack/react-router';
import { settingsRoute } from '../settings.route';
import { SettingsProfilePage } from './profile-settings.page';

export const profileSettingsRoute = createRoute({ getParentRoute: () => settingsRoute, path: '/', component: SettingsProfilePage });
