import { useNavigate } from '@tanstack/react-router';

import { Button } from 'ui/components/button';

export function LandingPage() {
    const navigate = useNavigate();

    const handleGetStart = () => navigate({ to: '/app' });

    return (
        <div>
            <Button onClick={handleGetStart}>Get Start</Button>
        </div>
    );
}
