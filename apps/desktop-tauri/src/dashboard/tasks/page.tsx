import { columns } from './components/columns';
import { DataTable } from './components/data-table';

import data from './data/tasks.json';

// Simulate a database read for tasks.
function getTasks() {
    return data;
}

export function DashboardTaskPage() {
    const tasks = getTasks();

    return (
        <div>
            <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
                <div className="flex items-center justify-between space-y-2">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
                        <p className="text-muted-foreground">Here&apos;s a list of your tasks for this month!</p>
                    </div>
                </div>
                <DataTable data={tasks} columns={columns} />
            </div>
        </div>
    );
}
