import { MutableRefObject, useEffect } from "react";

export const useOutsideClick = (ref: MutableRefObject<any>, callback: Function) => {
    const handleClick = (e: MouseEvent) => {
        if (ref?.current && !ref?.current.contains(e.target)) {
            callback();
        }
    };
    useEffect(() => {
        document.addEventListener("click", handleClick);
        
        return () => {
            document.removeEventListener("click", handleClick)
        };
    })
}