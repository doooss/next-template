import { ButtonHTMLAttributes, ReactNode } from 'react';

import styles from './Button.module.css';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'contained' | 'text' | 'outlined';
    className?: string;
    children?: ReactNode;
}

const Button = ({ variant, children = '', className, ...props }: IProps) => {
    switch (variant) {
        case 'text':
            return (
                <button
                    className={`${styles.text} ${styles.common} ${className}`}
                    {...props}
                >
                    <div />

                    {children}
                </button>
            );
        case 'outlined':
            return (
                <button
                    className={`${styles.outlined} ${styles.common} ${className}`}
                    {...props}
                >
                    <div />

                    {children}
                </button>
            );
        case 'contained':
        default:
            return (
                <button
                    className={`${styles.contained} ${styles.common} ${className}`}
                    {...props}
                >
                    <div />

                    {children}
                </button>
            );
    }
};

export default Button;
