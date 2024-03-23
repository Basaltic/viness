// import { useNavigate } from '@tanstack/react-router';

import { Button } from '@/common/components/ui/button';

// import { appStore } from '../app-state/app-state';

/**
 * Check if the app is first used
 * 1.
 */
export function LandingPage() {
    // const navigate = useNavigate();
    // const isFirstUse = appStore.use.storagePath();

    return (
        <div>
            <Button>Get Start</Button>
        </div>
    );
}
