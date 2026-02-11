interface BadgeProps {
    variant?: 'veg' | 'nonveg' | 'popular' | 'spicy' | 'default';
    children?: React.ReactNode;
    className?: string;
}

const Badge = ({ variant = 'default', children, className = '' }: BadgeProps) => {
    if (variant === 'veg') {
        return (
            <span className={`veg-indicator ${className}`} title="Vegetarian" />
        );
    }

    if (variant === 'nonveg') {
        return (
            <span className={`non-veg-indicator ${className}`} title="Non-Vegetarian" />
        );
    }

    const variants = {
        popular: 'bg-accent text-secondary',
        spicy: 'bg-error/10 text-error',
        default: 'bg-background-dark text-text-secondary'
    };

    return (
        <span
            className={`
        inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium
        ${variants[variant]}
        ${className}
      `}
        >
            {children}
        </span>
    );
};

export default Badge;
