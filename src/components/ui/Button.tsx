import * as React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'default' | 'lg';
    href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'default', href, ...props }, ref) => {
        const variants = {
            primary: 'bg-primary text-primary-foreground hover:bg-blue-700 shadow-sm',
            secondary: 'bg-muted text-muted-foreground hover:bg-slate-200',
            outline: 'border border-border bg-background hover:bg-slate-50 text-foreground',
            ghost: 'hover:bg-slate-100 text-foreground',
        };

        const sizes = {
            sm: 'h-9 px-4 text-sm',
            default: 'h-11 px-6 text-base',
            lg: 'h-14 px-8 text-lg',
        };

        const styles = cn(
            'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
            variants[variant],
            sizes[size],
            className
        );

        if (href) {
            return (
                <Link href={href} className={styles}>
                    {props.children}
                </Link>
            );
        }

        return (
            <button
                ref={ref}
                className={styles}
                {...props}
            />
        );
    }
);
Button.displayName = 'Button';

export { Button };
