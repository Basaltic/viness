import { cn } from 'ui/lib/utils';
import { buttonVariants } from 'ui/components/button';
import { Link, useMatches } from '@tanstack/react-router';
import { last } from 'lodash';

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
    items: {
        href: string;
        title: string;
    }[];
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
    const matches = useMatches();
    const lastMatch = last(matches);

    return (
        <nav className={cn('flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1', className)} {...props}>
            {items.map((item) => (
                <Link
                    key={item.href}
                    to={item.href}
                    className={cn(
                        buttonVariants({ variant: 'ghost' }),
                        lastMatch?.pathname === item.href ? 'bg-muted hover:bg-muted' : 'hover:bg-transparent hover:underline',
                        'justify-start',
                    )}
                >
                    {item.title}
                </Link>
            ))}
        </nav>
    );
}
