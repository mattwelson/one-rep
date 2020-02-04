import styled from "styled-components"

export const Input = styled.input`
  appearance: none;
  background: transparent;
  border: none;
  border-bottom: 3px solid rebeccapurple;
  font-family: "Avenir Next", "Helvetica Neue", "Segoe UI", "Helvetica", "Arial",
    sans-serif;
  text-align: center;
`

export const InputGrid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 6rem 5rem;
  font-size: 2rem;
  margin: 3rem auto;
`

export const Round = styled.div`
  display: grid;
  grid-template-columns: 100px 100px;
  justify-content: center;
  margin: 2rem 0 3rem;

  h4 {
    grid-column: span 2;
    margin: 0.5rem;
  }

  label {
    font-family: "Avenir Next", "Helvetica Neue", "Segoe UI", "Helvetica",
      "Arial", sans-serif;
  }
`
