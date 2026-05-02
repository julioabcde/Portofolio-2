import { ReactNode } from 'react'
import clsx from 'clsx'

type FlipDirection = 'vertical' | 'horizontal'

interface FlipEffectProps {
    children: ReactNode
    flipContent?: ReactNode
    direction?: FlipDirection
    duration?: number
    className?: string
    baseClassName?: string
    flipClassName?: string
    easing?: 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out'
}

const directionMap: Record<FlipDirection, { out: string; in: string }> = {
    vertical:   { out: 'group-hover:-translate-y-full', in: 'translate-y-full group-hover:translate-y-0' },
    horizontal: { out: 'group-hover:-translate-x-full', in: 'translate-x-full group-hover:translate-x-0' },
}

export function FlipEffects({
    children,
    flipContent,
    direction = 'vertical',
    duration = 300,
    easing = 'ease-out',
    className,
    baseClassName = '',
    flipClassName = '',
}: FlipEffectProps) {
    const { out, in: inward } = directionMap[direction]
    const transition = { transitionDuration: `${duration}ms`, transitionTimingFunction: easing }
    const layerBase = 'absolute inset-0 flex items-center justify-center transition-transform motion-reduce:transition-none'

    return (
        <span className={clsx('relative inline-flex h-full w-full items-center justify-center overflow-hidden', className)}>
            <span className={clsx(layerBase, out, baseClassName)} style={transition}>
                {children}
            </span>
            <span className={clsx(layerBase, inward, flipClassName)} style={transition}>
                {flipContent ?? children}
            </span>
            <span className="opacity-0" aria-hidden="true">{children}</span>
        </span>
    )
}