import { ReactNode } from 'react'
import clsx from 'clsx'

export type FlipDirection = 'vertical' | 'horizontal' | 'diagonal-left' | 'diagonal-right'

interface FlipEffectProps {
    children: ReactNode
    /** Content to show on hover/flip */
    flipContent?: ReactNode
    /** Direction of the flip animation */
    direction?: FlipDirection
    /** Duration in milliseconds */
    duration?: number
    /** Custom classes for the container */
    className?: string
    /** Custom classes for the base (default) state */
    baseClassName?: string
    /** Custom classes for the flipped (hover) state */
    flipClassName?: string
    /** Easing function */
    easing?: 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out'
    /** Enable background fill effect on hover */
    fillOnHover?: boolean
    /** Background color for fill effect (Tailwind class) */
    fillColor?: string
    /** Text color when filled (Tailwind class) */
    fillTextColor?: string
}

export function FlipEffect({
    children,
    flipContent,
    direction = 'vertical',
    duration = 300,
    easing = 'ease-out',
    className,
    baseClassName = '',
    flipClassName = '',
    fillOnHover = false,
    fillColor = 'bg-primary',
    fillTextColor = 'text-background',
}: FlipEffectProps) {
    // Define transform values based on direction
    const transforms = {
        vertical: {
            base: 'group-hover:-translate-y-full',
            flip: 'translate-y-full group-hover:translate-y-0',
            fill: 'translate-y-full group-hover:translate-y-0',
        },
        horizontal: {
            base: 'group-hover:-translate-x-full',
            flip: 'translate-x-full group-hover:translate-x-0',
            fill: 'translate-x-full group-hover:translate-x-0',
        },
        'diagonal-left': {
            base: 'group-hover:-translate-x-full group-hover:-translate-y-full',
            flip: 'translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0',
            fill: 'translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0',
        },
        'diagonal-right': {
            base: 'group-hover:translate-x-full group-hover:-translate-y-full',
            flip: '-translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0',
            fill: '-translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0',
        },
    }

    const selectedTransform = transforms[direction]

    return (
        <>
            {/* Background fill layer - positioned to fill parent */}
            {fillOnHover && (
                <span
                    aria-hidden="true"
                    className={clsx(
                        'absolute inset-0 z-0',
                        'transition-transform motion-reduce:transition-none',
                        selectedTransform.fill,
                        fillColor
                    )}
                    style={{
                        transitionDuration: `${duration}ms`,
                        transitionTimingFunction: easing,
                    }}
                />
            )}

            {/* Content wrapper */}
            <span
                className={clsx(
                    'relative z-10 inline-flex h-full w-full items-center justify-center overflow-hidden',
                    className
                )}
            >
                {/* Base layer (default state) */}
                <span
                    className={clsx(
                        'absolute inset-0 flex items-center justify-center',
                        'transition-transform motion-reduce:transition-none',
                        selectedTransform.base,
                        baseClassName
                    )}
                    style={{
                        transitionDuration: `${duration}ms`,
                        transitionTimingFunction: easing,
                    }}
                >
                    {children}
                </span>

                {/* Flip layer (hover state) */}
                <span
                    className={clsx(
                        'absolute inset-0 flex items-center justify-center',
                        'transition-transform motion-reduce:transition-none',
                        selectedTransform.flip,
                        fillOnHover ? fillTextColor : '',
                        flipClassName
                    )}
                    style={{
                        transitionDuration: `${duration}ms`,
                        transitionTimingFunction: easing,
                    }}
                >
                    {flipContent || children}
                </span>

                {/* Layout anchor (invisible, maintains space) */}
                <span className="opacity-0" aria-hidden="true">
                    {children}
                </span>
            </span>
        </>)
}
