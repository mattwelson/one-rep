import React from "react"

const About = () => (
  <div className="content">
    <h2>About the Calculator</h2>
    <p>
      This calculator is aimed at helping you keep track of your projected one
      rep max across different rep ranges. As well projecting that same effort
      against different rep maxes.
    </p>

    <h3>What is the 1RM Formula?</h3>
    <p>
      The formula used is based off{" "}
      <a href="https://strengthlevel.com/" rel="noopener noreferrer">
        strengthlevel.com
      </a>
      . It uses Brzycki under 8, Epley over 10, and the average of the two in
      the middle. Of course that means you could just use that calculator, and
      it is a great site, allowing you see what percentile your lift is for your
      bodyweight.
    </p>

    <h3>How Will This Help Me?</h3>
    <p>
      If your workout program (and you should be on a program, reddit has lots
      of ideas) is periodized to include different rep schemes then you can
      still track the progression of an estimated one rep max.
    </p>
    <p>
      The other way that I use this sort of calculator is to have a look at how
      my AMRAP (as many reps as possible) sets are comparing to each other.
    </p>

    <h3>Should I Count the Bar</h3>
    <p>Yes, depending on your barbell it will weigh around 20kg, or 45lb.</p>
  </div>
)

export default About
