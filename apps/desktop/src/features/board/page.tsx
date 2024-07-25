import { useParams } from '@tanstack/react-router';

/**
 * A Board to manage all the nodes
 */
export function WhiteBoardPage() {
    const params = useParams({ from: '__root__', strict: true });

    return (
        <div>
            white board page
            {JSON.stringify(params)}
        </div>
    );
}
