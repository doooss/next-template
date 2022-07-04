import { HTMLAttributes, ReactNode } from 'react';

import styles from './Paper.module.css';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    width?: string;
    height?: string;
    gap?: string;
    className?: string;
}

const Paper = ({
    children,
    width,
    height,
    gap,
    className,
    ...props
}: IProps) => {
    return (
        <div
            className={`${styles.paper} ${className}`}
            style={{
                '--width': width ?? null,
                '--height': height ?? null,
                '--gap': gap ?? null,
            }}
            {...props}
        >
            {children}
        </div>
    );
};

export default Paper;
