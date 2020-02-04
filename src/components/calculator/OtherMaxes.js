import React, { useState } from "react"
import { round } from "../../logic/calculator"
import * as inverse from "../../logic/inverseCalculator"

import { Round } from "./styles"

export const OtherMaxes = ({ max }) => {
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
      <Round>
        <h4>Change rounding</h4>
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
      </Round>
    </div>
  )
}
