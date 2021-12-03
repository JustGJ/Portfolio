import React, { useState, useEffect } from 'react';

const VISIBLE = 1;
const HIDDEN = 2;
const ENTERING = 3;
const LEAVING = 4;

interface IProps {
    visible: any;
    children: any;
    duration?: any;
    className?: any;
}

const Fade = ({ visible, children, duration, className }: IProps) => {
    const [state, setState] = useState(visible ? VISIBLE : HIDDEN);
    let style = state === VISIBLE ? `${className}` : `${className} ${className}--out`;

    useEffect(() => {
        if (!visible) {
            setState(LEAVING);
        } else {
            setState((s) => (s === HIDDEN ? ENTERING : VISIBLE));
        }
    }, [visible]);

    useEffect(() => {
        if (state === LEAVING) {
            const timer = setTimeout(() => {
                setState(HIDDEN);
            }, duration);
            return () => {
                clearTimeout(timer);
            };
        } else if (state === ENTERING) {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            document.body.offsetHeight;
            setState(VISIBLE);
        }
    }, [state]);

    if (state === HIDDEN) return null;

    return <div className={style}>{children}</div>;
};

export default Fade;
