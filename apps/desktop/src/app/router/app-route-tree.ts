import { whiteboardRoute } from '@/features/white-board/route';
import { rootRoute } from './app-root-route';
import { landingRoute } from '@/features/landing/route';
import { firstUseSetupPageRoute } from '@/features/setup/route';

export const routeTree = rootRoute.addChildren([landingRoute, firstUseSetupPageRoute, whiteboardRoute]);
