import { useState } from 'react';

export function useDragAndDrop(callback: any) {
    const [isDown, setIsDown] = useState(false);

    function handlerMouseDown() {
        setIsDown(true);
    }

    function handlerMouseleave() {
        setIsDown(false);
    }

    function handlerMouseUp() {
        setIsDown(false);
    }

    function handlerMouseMove(e: any) {
        if (!isDown) {
            return;
        };
        e.preventDefault();
        callback(e);
    }

    return {
        handlerMouseDown,
        handlerMouseleave,
        handlerMouseUp,
        handlerMouseMove
   };
}