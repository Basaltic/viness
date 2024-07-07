import { rootRoute } from '@/app/router/app-root-route';
import { createRoute } from '@tanstack/react-router';
import { WhiteBoardPage } from './page';

export const whiteboardRoute = createRoute({ getParentRoute: () => rootRoute, path: '/white-board/:id', component: WhiteBoardPage });
