import type { ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
    className?: string;
    hover?: boolean;
    padding?: 'none' | 'sm' | 'md' | 'lg';
}

const Card = ({
    children,
    className = '',
    hover = true,
    padding = 'md'
}: CardProps) => {
    const paddingSizes = {
        none: '',
        sm: 'p-3',
        md: 'p-5',
        lg: 'p-8'
    };

    return (
        <div
            className={`
        bg-surface rounded-xl shadow-md overflow-hidden
        ${hover ? 'hover-lift' : ''}
        ${paddingSizes[padding]}
        ${className}
      `}
        >
            {children}
        </div>
    );
};

export default Card;
