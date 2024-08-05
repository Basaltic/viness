import { useRef } from 'react';
import bgSvg from './assets/bg-point.svg';
import useBoardCanvasScroll from './use-board-canvas-scroll';

/**
 * 画板
 */
export default function BoardCanvas() {
    const scrollContentRef = useRef<HTMLDivElement>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scrollInfo = useBoardCanvasScroll(scrollContainerRef, scrollContentRef);

    return (
        <>
            <div
                id="board-canvas"
                className="relative w-full h-full bg-slate-200 overflow-auto"
                ref={scrollContainerRef}
                style={{ backgroundImage: `url(${bgSvg})` }}
            >
                <div
                    data-overlayscrollbars-initialize
                    ref={scrollContentRef}
                    className="relative min-w-full min-h-full"
                    style={{
                        width: scrollInfo.scrollWidth,
                        height: scrollInfo.scrollHeight,
                    }}
                >
                    {/* {displayBoardNode.location.headId && <ElementItemInBoard isResizable nodeId={displayBoardNode.location.headId} />} */}
                </div>
            </div>
        </>
    );
}

/**
 * 全局取消使用tab在元素间切换
 */
document.onkeydown = function (t) {
    if (t.key === 'Tab') {
        return false;
    }
};
