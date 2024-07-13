import { controllers } from '@/backend';
import { createUseCase } from '@viness/flow';
import { Button } from '@viness/ui/components/button';

const selectFolderCase = createUseCase(async () => {
    const folder = await controllers.app.selectLibraryFolder();
    console.log(folder);
});

/**
 * The Entry Page of the Application
 * 1. do some initialization stuffs
 * 2. redirect to other feature pages
 */
export function LandingPage() {
    const handle = async () => {
        const folder = await controllers.app.selectLibraryFolder();
        console.log(folder);
    };

    return (
        <div>
            <Button onClick={handle}>Test</Button>
        </div>
    );
}
