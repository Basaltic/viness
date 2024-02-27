import { landingRoute } from '../landing/landing.route';
import { dashboardRoute } from '@renderer/dashboard/dashboard.route';
import { authRoute } from '../authentication/auth.route';
import { rootRoute } from './root-route';
import { dashboardHomeRoute } from '@renderer/dashboard/home/home.route';
import { settingsRoute } from '@renderer/dashboard/settings/settings.route';
import { accountSettingsRoute } from '@renderer/dashboard/settings/account/route';
import { appearanceSettingsRoute } from '@renderer/dashboard/settings/appearance/route';
import { displaySettingsRoute } from '@renderer/dashboard/settings/display/route';
import { notificationsSettingsRoute } from '@renderer/dashboard/settings/notifications/notifications-settings.route';
import { profileSettingsRoute } from '@renderer/dashboard/settings/profile/profile-settings.route';
import { dashboardTaskRoute } from '@renderer/dashboard/tasks/route';

export const routeTree = rootRoute.addChildren([
    authRoute,
    landingRoute,
    dashboardRoute.addChildren([
        dashboardHomeRoute,
        dashboardTaskRoute,
        settingsRoute.addChildren([
            profileSettingsRoute,
            notificationsSettingsRoute,
            accountSettingsRoute,
            appearanceSettingsRoute,
            displaySettingsRoute,
        ]),
    ]),
]);
