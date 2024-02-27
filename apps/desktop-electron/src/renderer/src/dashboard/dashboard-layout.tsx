import { Search } from 'lucide-react';
import { MainNav } from './home/components/main-nav';
import { TeamSwitcher } from './home/components/team-switcher';
import { UserNav } from './home/components/user-nav';
import { Outlet } from '@tanstack/react-router';
import { Suspense } from 'react';
import { ThemeToggle } from '@renderer/common/components/theme/theme-toggle';

export function DashboardLayout() {
    return (
        <div className="w-full h-full flex-col overflow-hidden">
            <div className="w-full border-b top-0">
                <div className="flex h-16 items-center px-4">
                    <TeamSwitcher />
                    <MainNav className="mx-6" />
                    <div className="ml-auto flex items-center space-x-4">
                        <Search />
                        <UserNav />
                        <ThemeToggle />
                    </div>
                </div>
            </div>
            <div className="flex-1 h-full overflow-auto">
                <Suspense>
                    <Outlet />
                </Suspense>
            </div>
        </div>
    );
}
