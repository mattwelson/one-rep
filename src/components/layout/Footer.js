import React from "react"
import styled from "styled-components"
import { FaGithubSquare, FaTwitterSquare } from "react-icons/fa"
import { TiSocialInstagram } from "react-icons/ti"

const Footer = styled.footer`
  text-align: center;
  margin: 4rem 0;
`

const SocialGrid = styled.div`
  display: grid;
  font-size: 3rem;
  justify-content: center;

  a {
    color: black;
    transition: 0.3s;
    opacity: 0.8;
  }

  a:hover {
    transform: translateY(-5px);
    opacity: 1;
  }
`

export default () => (
  <Footer>
    <h4>Made by Matt Welson</h4>
    <SocialGrid>
      <a href="https://github.com/mattwelson/one-rep" rel="noopener noreferrer">
        <FaGithubSquare />
      </a>
      <a href="https://www.instagram.com/m.welson/" rel="noopener noreferrer">
        <TiSocialInstagram />
      </a>
      <a href="https://twitter.com/MattWelson" rel="noopener noreferrer">
        <FaTwitterSquare />
      </a>
    </SocialGrid>
  </Footer>
)
