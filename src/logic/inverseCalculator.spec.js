import { epley, brzycki, combined, calculate } from "./inverseCalculator"

describe(epley, () => {
  it("handles 2 rep max - 100", () => {
    expect(Math.round(epley(100, 2))).toBe(94)
  })

  it("handles 3 rep max - 145", () => {
    expect(Math.round(epley(145, 3))).toBe(132)
  })

  it("handles 4 rep max - 150", () => {
    expect(Math.round(epley(150, 4))).toBe(132)
  })

  it("handles 5 rep max - 90", () => {
    expect(Math.round(epley(90, 5))).toBe(77)
  })

  it("handles 6 rep max - 190", () => {
    expect(Math.round(epley(190, 6))).toBe(158)
  })
})

describe(brzycki, () => {
  it("handles 2 rep max - 100", () => {
    expect(Math.round(brzycki(100, 2))).toBe(97)
  })

  it("handles 3 rep max - 145", () => {
    expect(Math.round(brzycki(145, 3))).toBe(137)
  })

  it("handles 4 rep max - 150", () => {
    expect(Math.round(brzycki(150, 4))).toBe(138)
  })

  it("handles 5 rep max - 90", () => {
    expect(Math.round(brzycki(90, 5))).toBe(80)
  })

  it("handles 6 rep max - 190", () => {
    expect(Math.round(brzycki(190, 6))).toBe(164)
  })

  it("handles 12 rep max - 90", () => {
    expect(Math.round(brzycki(90, 12))).toBe(63)
  })

  it("handles 15 rep max - 50", () => {
    expect(Math.round(brzycki(50, 15))).toBe(31)
  })
})

describe(combined, () => {
  it("handles 2 rep max - 100", () => {
    expect(Math.round(combined(100, 2))).toBe(95)
  })

  it("handles 3 rep max - 145", () => {
    expect(Math.round(combined(145, 3))).toBe(134)
  })

  it("handles 4 rep max - 150", () => {
    expect(Math.round(combined(150, 4))).toBe(135)
  })

  it("handles 5 rep max - 90", () => {
    expect(Math.round(combined(90, 5))).toBe(79)
  })

  it("handles 6 rep max - 190", () => {
    expect(Math.round(combined(190, 6))).toBe(161)
  })

  it("handles 9 rep max - 90", () => {
    expect(Math.round(combined(90, 9))).toBe(70)
  })

  it("handles 12 rep max - 90", () => {
    expect(Math.round(combined(90, 12))).toBe(63)
  })

  it("handles 15 rep max - 50", () => {
    expect(Math.round(combined(50, 15))).toBe(32)
  })
})

describe(calculate, () => {
  it("handles single", () => {
    expect(calculate(110, 1)).toBe(110)
  })

  it("handles 3 rep max - 50 - uses brzycki", () => {
    expect(Math.round(calculate(90, 3))).toBe(85)
    expect(Math.round(brzycki(90, 3))).toBe(85)
  })

  it("handles 9 rep max - 90 - uses combined", () => {
    expect(Math.round(calculate(90, 9))).toBe(70)
    expect(Math.round(combined(90, 9))).toBe(70)
  })

  it("handles 12 rep max - 90 - uses epley", () => {
    expect(Math.round(calculate(90, 12))).toBe(64)
    expect(Math.round(epley(90, 12))).toBe(64)
  })
})
