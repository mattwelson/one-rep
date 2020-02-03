import React, { useState } from "react"
import { calculate, round } from "../../logic/calculator"
import * as inverse from "../../logic/inverseCalculator"

const Max = ({ max }) => {
  if (!max) return null
  return <h2>Your 1RM is {round(max, 1)}</h2>
}

const OtherMaxes = ({ max }) => {
  const [roundTo, setRoundTo] = useState(2.5)
  if (!max) return null

  return (
    <div>
      <h3>Your other rep maxes</h3>
      <div>
        <h4>2RM</h4>
        <p>{round(inverse.calculate(max, 2), roundTo)}</p>
        <h4>3RM</h4>
        <p>{round(inverse.calculate(max, 3), roundTo)}</p>
        <h4>5RM</h4>
        <p>{round(inverse.calculate(max, 5), roundTo)}</p>
        <h4>10RM</h4>
        <p>{round(inverse.calculate(max, 10), roundTo)}</p>
      </div>
      <p>
        Change rounding
        <label>
          <input
            type="radio"
            name="roundTo"
            value={2.5}
            onChange={e => setRoundTo(e.target.value)}
            defaultChecked={true}
          />{" "}
          2.5
        </label>
        <label>
          <input
            type="radio"
            name="roundTo"
            value={5}
            onChange={e => setRoundTo(e.target.value)}
          />{" "}
          5
        </label>
      </p>
    </div>
  )
}

const Calculator = () => {
  const [weight, setWeight] = useState(50)
  const [reps, setReps] = useState(5)
  const max = calculate(parseInt(weight, 10), parseInt(reps, 10))
  return (
    <div>
      <input
        type="number"
        onChange={e => setWeight(e.target.value)}
        placeholder="Weight"
        value={weight}
      />
      <input
        type="number"
        onChange={e => setReps(e.target.value)}
        placeholder="Reps"
        value={reps}
      />
      <Max max={max} />
      <OtherMaxes max={max} />
    </div>
  )
}

export default Calculator
