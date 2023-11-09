import { memo, useCallback, useEffect, useRef, useState } from 'react';

import { useDragAndDrop } from '../../hooks/useDragAndDrop';
import { ProgressInt } from '../../types/ComponentsInt';

import './Progress.scss';

function Progress({
    currentProgress,
    allProgress,
    point = true,
    callback = () => { }
}: ProgressInt) {

    const ref = useRef<any>();
    const [progressWidth, setProgressWidth] = useState(0);
    const {
        handlerMouseDown,
        handlerMouseleave,
        handlerMouseUp,
        handlerMouseMove
    } = useDragAndDrop(handleClickProgress);

    const getWidth = useCallback(() => {
        if (currentProgress === 0) {
            setProgressWidth(0);
        } else {
            setProgressWidth(currentProgress * 100 / allProgress);
        }
    }, [currentProgress]);

    function handleClickProgress(e: any) {
        // const width = ref.current.clientWidth;
        // const clickX = e.clientX - ref.current.offsetLeft;
        // const currentTimeClick = clickX * allProgress / width;

        const element=ref.current.getBoundingClientRect()
        const width=element.width
        const clickX = e.clientX - element.left;
        const currentTimeClick = clickX * allProgress / width;
        
        if (currentTimeClick >= 0 && currentTimeClick <= allProgress) {
            setProgressWidth(currentTimeClick * 100 / allProgress);
            callback(currentTimeClick);
        }
    };

    useEffect(() => {
        getWidth();
    }, [currentProgress]);

    return (
        <div
            className="progress"
            onMouseDown={handlerMouseDown}
            onMouseLeave={handlerMouseleave}
            onMouseUp={handlerMouseUp}
            onMouseMove={handlerMouseMove}
        >
            <div
                className="progress__container"
                ref={ref}
                onClick={(e) => handleClickProgress(e)}
            >
                <div className={`
                        progress__progress 
                        ${point ? 'progress__progress_type_point' : ''}
                    `}
                    style={{ width: progressWidth + '%' }}
                >
                </div>
            </div>
        </div>
    );
}

export default memo(Progress);