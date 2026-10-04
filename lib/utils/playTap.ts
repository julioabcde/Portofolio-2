let ctx: AudioContext | null = null

/** Soft "droplet" tap for the compact tab bar, synthesized with Web Audio (no audio file). */
export function playTap() {
  try {
    ctx ??= new AudioContext()
    if (ctx.state === 'suspended') void ctx.resume()
    const t = ctx.currentTime
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.type = 'sine'
    osc.frequency.setValueAtTime(1200, t)
    osc.frequency.exponentialRampToValueAtTime(550, t + 0.14)
    gain.gain.setValueAtTime(0.0001, t)
    gain.gain.exponentialRampToValueAtTime(0.06, t + 0.004)
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.2)
    osc.connect(gain).connect(ctx.destination)
    osc.start(t)
    osc.stop(t + 0.25)
  } catch {
    // Audio is decorative; ignore unsupported/blocked contexts.
  }
}
