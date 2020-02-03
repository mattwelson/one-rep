export const epley = (max, reps) => max / (1 + reps / 30)

export const brzycki = (max, reps) => max * ((37 - reps) / 36)

export const combined = (max, reps) =>
  (epley(max, reps) + brzycki(max, reps)) / 2

export const calculate = (max, reps) => {
  if (!reps || reps < 1) return null
  if (reps === 1) return max
  if (reps < 8) return brzycki(max, reps)
  if (reps > 10) return epley(max, reps)
  return combined(max, reps)
}
