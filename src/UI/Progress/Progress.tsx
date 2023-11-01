import { useEffect, useRef, useState } from 'react';

import { useDragAndDrop } from '../../hooks/useDragAndDrop';
import './Progress.scss';

interface IProgress {
    point?: boolean,
    callback?: (progress: number) => void,
    currentProgress: number,// текущая длинна прогресс бара, пересчитается в %
    allProgress: number // вся длинна прогресс бара, пересчитается в %
}

function Progress({ currentProgress, allProgress, point = true, callback = () => { } }: IProgress) {
    const ref = useRef<any>();
    const [progressWidth, setProgressWidth] = useState(0);

    const {
        handlerMouseDown,
        handlerMouseleave,
        handlerMouseUp,
        handlerMouseMove
     }= useDragAndDrop(handleClickProgress)


    function getWidth() {
        if (currentProgress === 0) {
            setProgressWidth(0);
        } else {
            setProgressWidth(currentProgress * 100 / allProgress);
        }
    }

    function handleClickProgress(e: any) {
        const width = ref.current.clientWidth;
        const clickX = e.clientX - ref.current.offsetLeft;
        const currentTimeClick = clickX * allProgress / width;

        setProgressWidth(currentTimeClick * 100 / allProgress);
        callback(currentTimeClick);
    }

    useEffect(() => {
        getWidth();
    }, [currentProgress]);

    return (
        <div className="progress" >
            <div className="progress__container" ref={ref} onClick={(e) => handleClickProgress(e)}>
                <div className={`
                        progress__progress 
                        ${point ? 'progress__progress_type_point' : ''}
                    `}
                    style={{ width: progressWidth + '%' }}
                    onMouseDown={handlerMouseDown}
                    onMouseLeave={handlerMouseleave}
                    onMouseUp={handlerMouseUp}
                    onMouseMove={handlerMouseMove}
                >
                </div>
            </div>
        </div>
    );
}

export default Progress;