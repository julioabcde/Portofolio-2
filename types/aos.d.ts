/**
 * AOS ditulis dalam JavaScript
 * Perlu deklarasi modul untuk TypeScript
 * Agar tidak terjadi error saat mengimpor AOS
 * https://michalsnik.github.io/aos/
 */

declare module 'aos' {
    interface AosOptions {
        offset?: number
        delay?: number
        duration?: number
        easing?: string
        once?: boolean
        mirros?: boolean
        anchorPlacement?: string
    }

    const AOS: {
        init(options?: AosOptions): void
        refresh(): void
        refreshHard(): void
    }
    export default AOS
}