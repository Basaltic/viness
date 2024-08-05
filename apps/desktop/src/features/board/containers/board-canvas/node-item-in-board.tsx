import { cn } from '@viness/ui/lib/utils';
import { memo, useRef } from 'react';

import { useNodeStoreFactory } from '../../store/node.store';
import { board } from '../../board.setup';

/**
 * 画布元素（容器）组件
 */
export const ElementItemInBoard = memo((props: { nodeId: string; isResizable: boolean }) => {
    const { nodeId } = props;

    const draggableRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const nodeStore = useNodeStoreFactory(nodeId);
    const nodeState = nodeStore.state.use();

    // 节点位置
    const { location, type } = nodeState;
    const { x = 0, y = 0, nextId } = location;

    const description = board.descriptionRegistry.get(type);

    const isDragging = false;
    const isNodeSelected = false;

    if (!description?.view) {
        return null;
    }

    const containerClassName = cn('absolute', isDragging ? 'opacity-0' : 'opacity-100', isNodeSelected ? 'z-40' : '');
    const draggableWrapperClassName = cn('relative bg-white', isNodeSelected ? 'ring-2 ring-slate-600 z-50' : 'ring-1 ring-slate-200');

    return (
        <>
            <div
                ref={containerRef}
                className={containerClassName}
                style={{
                    transform: `translate3d(${x}px, ${y}px, 0)`,
                }}
                data-id={nodeId}
            >
                <div ref={draggableRef} className={draggableWrapperClassName}>
                    <description.view id={nodeId} />
                </div>
            </div>
            {nextId && <ElementItemInBoard isResizable nodeId={nextId} />}
        </>
    );
});
