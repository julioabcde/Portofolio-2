// ButtonBase.tsx
import { ReactNode } from 'react'
import { FlipEffect } from './FlipEffect'

interface ButtonBaseProps {
    children: ReactNode
    variant?: 'primary' | 'secondary'
    className?: string
}

export function ButtonBase({
    children,
    variant = 'primary',
    className,
}: ButtonBaseProps) {
    const variants = {
        primary: {
            base: 'bg-background text-foreground',
            hover: 'bg-primary text-background',
        },
        secondary: {
            base: 'bg-surface text-foreground',
            hover: 'bg-accent text-background',
        },
    }

    return (
        <span className="group inline-flex h-full w-full">
            <FlipEffect
                direction="vertical"
                duration={300}
                easing="ease-out"
                className={className}
                baseClassName={variants[variant].base}
                flipClassName={variants[variant].hover}
            >
                {children}
            </FlipEffect>
        </span>
    )
}
