import { Outlet } from '@tanstack/react-router';
import { Suspense } from 'react';
import { cn } from '@viness/ui/lib/utils';
import { PageSuspenseFallback } from './app-suspense-fallback';

export function AppContent(props: { className?: string }) {
    const { className } = props;
    return (
        <div className={cn('w-full h-full relative', className)}>
            <Suspense fallback={<PageSuspenseFallback />}>
                <Outlet />
            </Suspense>
        </div>
    );
}
