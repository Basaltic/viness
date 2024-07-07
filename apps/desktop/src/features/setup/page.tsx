import { createUseCase } from '@viness/flow';
import { Button } from '@viness/ui/components/button';
import { Input } from '@viness/ui/components/input';

createUseCase(() => {});

/**
 * First Use Setup
 */
export function FirstUseSetupPage() {
    return (
        <div>
            <Input placeholder="Your First Libaray" />
            <Button>Select</Button>
        </div>
    );
}
