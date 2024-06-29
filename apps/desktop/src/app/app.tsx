import { RouterProvider } from '@tanstack/react-router';
import { router } from './router/app-router';
import { Toaster } from '@viness/ui/components/sonner';

export function App() {
    return (
        <>
            <RouterProvider router={router} />
            <Toaster />
        </>
    );
}
