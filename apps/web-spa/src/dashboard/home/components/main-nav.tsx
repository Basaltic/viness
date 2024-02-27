import { cn } from 'ui/lib/utils';
import { Link, useMatches } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import { last } from 'lodash';

export function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
    const { t } = useTranslation();

    return (
        <nav className={cn('flex items-center space-x-4 lg:space-x-6', className)} {...props}>
            <NavItem to="/app/" label="Overview" />
            <NavItem to="/app/settings/" label="Settings" />
            <NavItem to="/app/tasks/" label={t('dashboard-main-menu-task')} />
        </nav>
    );
}

const NavItem = (props: { to: string; label: string }) => {
    const { to, label } = props;
    const matches = useMatches();
    const lastMatch = last(matches);

    const cx = cn('text-sm font-medium transition-colors hover:text-primary', lastMatch?.pathname === to ? '' : 'text-muted-foreground');

    return (
        <Link to={to} className={cx}>
            {label}
        </Link>
    );
};
