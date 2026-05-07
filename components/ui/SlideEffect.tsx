import { ReactNode } from 'react'
import clsx from 'clsx'

interface SlideEffectProps {
    children: ReactNode
    duration?: number
    fillColor?: string
    fillTextColor?: string
}

export function SlideEffect({
    children,
    duration = 300,
    fillColor = 'bg-primary',
    fillTextColor = 'text-background',
}: SlideEffectProps) {
    const style = {
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: 'ease-in-out',
    }

    return (
        <>
            <span
                aria-hidden="true"
                className={clsx(
                    'absolute inset-0 z-0 translate-y-full group-hover:translate-y-0',
                    'transition-transform motion-reduce:transition-none',
                    fillColor
                )}
                style={style}
            />
            <span className="relative z-10 inline-flex h-full w-full items-center justify-center overflow-hidden">
                <span
                    className="absolute inset-0 flex items-center justify-center transition-transform motion-reduce:transition-none group-hover:-translate-y-full"
                    style={style}
                >
                    {children}
                </span>
                <span
                    className={clsx(
                        'absolute inset-0 flex items-center justify-center translate-y-full group-hover:translate-y-0',
                        'transition-transform motion-reduce:transition-none',
                        fillTextColor
                    )}
                    style={style}
                >
                    {children}
                </span>
                <span className="opacity-0" aria-hidden="true">
                    {children}
                </span>
            </span>
        </>
    )
}
