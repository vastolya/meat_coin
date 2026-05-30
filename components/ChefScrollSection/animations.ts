import type { AnimState, Direction, TransitionPair } from './types'

export const transition = { duration: 0.45, ease: 'easeInOut' as const }

export const VISIBLE: AnimState = { x: 0, y: 0, opacity: 1, filter: 'blur(0px)' }

const TRANSITIONS: Array<TransitionPair | null> = [
  null,
  { enter: { x: 120 }, exit: { x: -120 } }, // 0→1: входит слева
  { enter: { y: 60 }, exit: { y: -60 } }, // 1→2: входит снизу
  { enter: { x: 120 }, exit: { x: -120 } }, // 2→3: входит слева
  { enter: { y: 60 }, exit: { y: -60 } }, // 3→4: входит снизу
  { enter: { x: 120 }, exit: { x: -120 } }, // 4→5: входит слева
]

const scaleDirection = ({ x, y }: Direction, scale: number): Direction => ({
  ...(x ? { x: x * scale } : {}),
  ...(y ? { y: y * scale } : {}),
})

export function getAnims(current: number, next: number): { entry: AnimState; exit: AnimState } {
  const forward = next > current
  const t = TRANSITIONS[forward ? next : current]

  if (!t) {
    return {
      entry: { y: 60, opacity: 0, filter: 'blur(6px)' },
      exit: { y: -60, opacity: 0, filter: 'blur(6px)' },
    }
  }

  // Прямо: вход в одну сторону, выход в другую
  // Назад: направления зеркалятся
  return forward
    ? {
        entry: { ...t.enter, opacity: 0, filter: 'blur(6px)' },
        exit: { ...t.exit, opacity: 0, filter: 'blur(6px)' },
      }
    : {
        entry: { ...t.exit, opacity: 0, filter: 'blur(6px)' },
        exit: { ...t.enter, opacity: 0, filter: 'blur(6px)' },
      }
}

export function getMobileEntry(index: number): AnimState {
  const t = TRANSITIONS[index]
  const direction = t ? scaleDirection(t.enter, 0.45) : { y: 28 }

  return { ...direction, opacity: 0, filter: 'blur(4px)' }
}
