import { landingRoute } from '../landing/landing.route';
import { dashboardRoute } from '@/dashboard/dashboard.route';
import { authRoute } from '../authentication/auth.route';
import { rootRoute } from './root-route';
import { dashboardHomeRoute } from '@/dashboard/home/home.route';
import { settingsRoute } from '@/dashboard/settings/settings.route';
import { accountSettingsRoute } from '@/dashboard/settings/account/route';
import { appearanceSettingsRoute } from '@/dashboard/settings/appearance/route';
import { displaySettingsRoute } from '@/dashboard/settings/display/route';
import { notificationsSettingsRoute } from '@/dashboard/settings/notifications/notifications-settings.route';
import { profileSettingsRoute } from '@/dashboard/settings/profile/profile-settings.route';
import { dashboardTaskRoute } from '@/dashboard/tasks/route';

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
