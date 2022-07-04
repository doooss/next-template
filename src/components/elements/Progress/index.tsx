import { useEffect, useRef, useState } from 'react';

import styles from './Progress.module.css';

export const Progress = ({ color }: { color?: string }) => {
    const progressRef = useRef<HTMLDivElement>(null);
    const [state, setState] = useState(true);

    useEffect(() => {
        if (!progressRef.current) return;
        return () => {
            setTimeout(() => {
                if (progressRef.current) {
                    const { current } = progressRef;
                    current.style.transition = 'opacity 0.5s';
                    current.style.opacity = '0';
                }
            }, 1500);
        };
    }, [progressRef]);
    if (state) {
        return (
            <div
                className={styles.progress}
                ref={progressRef}
                style={{ '--color': color }}
            />
        );
    }
    return <></>;
};
