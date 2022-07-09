import { forwardRef, HTMLAttributes, ReactNode } from 'react';

import styles from './Paper.module.css';

interface PaperProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    width?: string;
    height?: string;
    gap?: string;
    className?: string;
}

const Paper = forwardRef<HTMLDivElement, PaperProps>(
    (
        { children, width, height, gap, className, ...props }: PaperProps,
        ref,
    ) => {
        return (
            <div
                className={`${styles.paper} ${className}`}
                style={{
                    '--width': width ?? null,
                    '--height': height ?? null,
                    '--gap': gap ?? null,
                }}
                ref={ref}
                {...props}
            >
                {children}
            </div>
        );
    },
);

Paper.displayName = 'Paper';

export default Paper;
