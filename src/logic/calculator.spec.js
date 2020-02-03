import { epley, brzycki, combined, calculate, round } from "./calculator"

describe(epley, () => {
  it("handles 2 rep max - 100", () => {
    expect(Math.round(epley(100, 2))).toBe(107)
  })

  it("handles 3 rep max - 145", () => {
    expect(Math.round(epley(145, 3))).toBe(160)
  })

  it("handles 4 rep max - 150", () => {
    expect(Math.round(epley(150, 4))).toBe(170)
  })

  it("handles 5 rep max - 90", () => {
    expect(Math.round(epley(90, 5))).toBe(105)
  })

  it("handles 6 rep max - 190", () => {
    expect(Math.round(epley(190, 6))).toBe(228)
  })
})

describe(brzycki, () => {
  it("handles 2 rep max - 100", () => {
    expect(Math.round(brzycki(100, 2))).toBe(103)
  })

  it("handles 3 rep max - 145", () => {
    expect(Math.round(brzycki(145, 3))).toBe(154)
  })

  it("handles 4 rep max - 150", () => {
    expect(Math.round(brzycki(150, 4))).toBe(164)
  })

  it("handles 5 rep max - 90", () => {
    expect(Math.round(brzycki(90, 5))).toBe(101)
  })

  it("handles 6 rep max - 190", () => {
    expect(Math.round(brzycki(190, 6))).toBe(221)
  })

  it("handles 12 rep max - 90", () => {
    expect(Math.round(brzycki(90, 12))).toBe(130)
  })

  it("handles 15 rep max - 50", () => {
    expect(Math.round(brzycki(50, 15))).toBe(82)
  })
})

describe(combined, () => {
  it("handles 2 rep max - 100", () => {
    expect(Math.round(combined(100, 2))).toBe(105)
  })

  it("handles 3 rep max - 145", () => {
    expect(Math.round(combined(145, 3))).toBe(157)
  })

  it("handles 4 rep max - 150", () => {
    expect(Math.round(combined(150, 4))).toBe(167)
  })

  it("handles 5 rep max - 90", () => {
    expect(Math.round(combined(90, 5))).toBe(103)
  })

  it("handles 6 rep max - 190", () => {
    expect(Math.round(combined(190, 6))).toBe(224)
  })

  it("handles 9 rep max - 90", () => {
    expect(Math.round(combined(90, 9))).toBe(116)
  })

  it("handles 12 rep max - 90", () => {
    expect(Math.round(combined(90, 12))).toBe(128)
  })

  it("handles 15 rep max - 50", () => {
    expect(Math.round(combined(50, 15))).toBe(78)
  })
})

describe(calculate, () => {
  it("handles single", () => {
    expect(calculate(110, 1)).toBe(110)
  })

  it("handles 3 rep max - 50 - uses brzycki", () => {
    expect(Math.round(calculate(90, 3))).toBe(95)
    expect(Math.round(brzycki(90, 3))).toBe(95)
  })

  it("handles 9 rep max - 90 - uses combined", () => {
    expect(Math.round(calculate(90, 9))).toBe(116)
    expect(Math.round(combined(90, 9))).toBe(116)
  })

  it("handles 12 rep max - 90 - uses epley", () => {
    expect(Math.round(calculate(90, 12))).toBe(126)
    expect(Math.round(epley(90, 12))).toBe(126)
  })
})

describe(round, () => {
  it("rounds with default - down", () => {
    expect(round(11)).toBe(10)
  })

  it("rounds with default - up", () => {
    expect(round(19)).toBe(20)
  })

  it("rounds to 5 - down", () => {
    expect(round(17, 5)).toBe(15)
  })

  it("rounds to 5 - up", () => {
    expect(round(17.5, 5)).toBe(20)
  })

  it("rounds to 1 - up", () => {
    expect(round(25.25, 1)).toBe(25)
  })

  it("rounds to 1 - up", () => {
    expect(round(19.5, 1)).toBe(20)
  })
})
