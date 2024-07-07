import { whiteboardRoute } from '@/features/white-board/route';
import { rootRoute } from './app-root-route';

export const routeTree = rootRoute.addChildren([whiteboardRoute]);
