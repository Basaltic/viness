import { useParams } from '@tanstack/react-router';
import BoardCanvas from './containers/board-canvas';
import { NavBreadcrumb } from './containers/nav-breadcrumb';

/**
 * A Board to manage all the nodes
 */
export function WhiteBoardPage() {
    const params = useParams({ from: '__root__', strict: true });

    return (
        <div className="relative w-full h-full flex">
            <Main>
                {/* 工具栏层 - breadcrumb, global menus, title */}

                {/* <Header />
                <ElementMenu />
                <RecycleBin /> */}
                <NavBreadcrumb />

                {/* 内容层 Canvas / Finder(Node Tree) */}
                <BoardCanvas />
            </Main>

            {/* <TrashDrawer /> */}
        </div>
    );
}

function Main(props: { children: React.ReactNode }) {
    return <div className="relative grow">{props.children}</div>;
}
