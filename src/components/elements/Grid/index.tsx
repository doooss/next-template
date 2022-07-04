import { HTMLAttributes, ReactNode } from 'react';

import styles from './Grid.module.css';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    width?: string;
    height?: string;
    gap?: number;
}

interface ItemProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    row?: number;
    mobile?: number;
    tablet?: number;
    width?: string;
    height?: string;
    className?: string;
}

/*
  width, height = default 100%,
  gap = 0 ;
  기타 스타일은 class 추가 설정해서 작성
*/

export const GridContainer = ({
    children = '',
    width = '',
    height = '',
    gap = 0,
    className,
    ...props
}: ContainerProps) => {
    return (
        <div
            className={`${styles.grid_container} ${className}`}
            {...props}
            style={{ '--width': width, '--height': height, '--gap': gap }}
        >
            {children}
        </div>
    );
};

/*
  row = default 4 (1~12  12분할로 grid container 비율)
  mobile , tablet 은 각 기기 별 사이즈 미디어 쿼리에서 row 를 대체 
  기타 스타일은 class 추가해서 작성
*/

export const GridItem = ({
    children = '',
    row,
    mobile,
    tablet,
    width,
    height,
    ...props
}: ItemProps) => {
    return (
        <div
            className={styles.grid_item}
            style={{
                '--width': width ?? null,
                '--height': height ?? null,
                '--row': row ?? null,
                '--mobile': mobile ?? null,
                '--tablet': tablet ?? null,
            }}
            {...props}
        >
            {children}
        </div>
    );
};
