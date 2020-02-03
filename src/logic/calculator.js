export const epley = (weight, reps) => weight * (1 + reps / 30)

export const brzycki = (weight, reps) => (weight * 36) / (37 - reps)

export const combined = (weight, reps) =>
  (epley(weight, reps) + brzycki(weight, reps)) / 2

export const calculate = (weight, reps) => {
  if (!reps || reps < 1) return null
  if (reps === 1) return weight
  if (reps < 8) return brzycki(weight, reps)
  if (reps > 10) return epley(weight, reps)
  return combined(weight, reps)
}

export const round = (weight, value = 2.5) => Math.round(weight / value) * value
