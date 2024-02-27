import { RouterProvider } from '@tanstack/react-router';
import { router } from './router/app-router';
import { Toaster } from 'ui/components/sonner';
import { ThemeProvider } from '@renderer/common/components/theme/theme-provider';

export function App() {
    return (
        <ThemeProvider defaultTheme="light" storageKey="ui-theme">
            <RouterProvider router={router} />
            <Toaster />
        </ThemeProvider>
    );
}
