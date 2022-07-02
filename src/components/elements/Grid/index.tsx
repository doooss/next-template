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
}

export const GridContainer = ({
  children = '',
  width = '',
  height = '',
  gap = 0,
  ...props
}: ContainerProps) => {
  return (
    <div
      className={styles.grid_container}
      {...props}
      style={{ '--width': width, '--height': height, '--gap': gap }}
    >
      {children}
    </div>
  );
};

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
