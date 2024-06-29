import { createRootRoute } from '@tanstack/react-router';
import { AppLayout } from '../layout/app-layout';

export const rootRoute = createRootRoute({ component: AppLayout });
