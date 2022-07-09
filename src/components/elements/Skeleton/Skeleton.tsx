import { HTMLAttributes } from 'react';

import styles from './Skeleton.module.css';

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
    width?: string;
    height?: string;
    isCircle?: boolean;
    className?: string;
}

/* isCircle 값은 border-radius 를 100% 로 만들어 줌, 다만 원을 만들지는 않고 깍는 형태이니, width, height 를 맞춘 경우에만 이 옵션을 사용할것 default false*/

const Skeleton = ({
    width,
    height,
    className,
    isCircle = false,
}: SkeletonProps) => {
    return (
        <div
            className={`${styles.skeleton} ${className}`}
            style={{
                '--width': width ?? null,
                '--height': height ?? null,
                '--border-radius': isCircle ? '100%' : 0,
            }}
        />
    );
};

export default Skeleton;
