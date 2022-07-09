import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';

import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'contained' | 'text' | 'outlined';
    className?: string;
    children?: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            variant = 'contained',
            children = '',
            className,
            ...props
        }: ButtonProps,
        ref,
    ) => {
        return (
            <button
                className={`${styles[variant]} ${styles.common} ${className}`}
                ref={ref}
                {...props}
            >
                <div />

                {children}
            </button>
        );
    },
);

Button.displayName = 'Button';

export default Button;
