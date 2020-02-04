import React, { useState } from "react"
import { calculate, round } from "../../logic/calculator"
import { OtherMaxes } from "./OtherMaxes"

import { Input, InputGrid } from "./styles"

const Max = ({ max }) => {
  if (!max) return null
  return <h2>Your 1RM is {round(max, 1)}</h2>
}

const Calculator = () => {
  const [weight, setWeight] = useState(50)
  const [reps, setReps] = useState(5)
  const max = calculate(parseInt(weight, 10), parseInt(reps, 10))
  return (
    <div className="content">
      <InputGrid>
        <Input
          type="number"
          onChange={e => setWeight(e.target.value)}
          placeholder="Weight"
          value={weight}
        />
        <Input
          type="number"
          onChange={e => setReps(e.target.value)}
          placeholder="Reps"
          value={reps}
        />
      </InputGrid>
      <Max max={max} />
      <OtherMaxes max={max} />
    </div>
  )
}

export default Calculator
