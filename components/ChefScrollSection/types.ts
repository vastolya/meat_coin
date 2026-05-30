export type AnimState = { x?: number; y?: number; opacity: number; filter: string }

export type Direction = { x?: number; y?: number }

export type TransitionPair = {
  enter: Direction
  exit: Direction
}
