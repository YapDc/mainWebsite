import React from 'react'
import styled from 'styled-components'
import YapLogoSVG from '../images/yapdc-logo.svg'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const SplashStyle = styled.div`
  height: 100%;
  min-height: 100%;
  transition: 0.5s;
  width: 100%;
  min-width: 100%;
  background-color: #fcbc19;
  position: fixed;
  display: flex;
  justify-content: center;
  align-self: center;

  div {
    align-self: center;
  }
  h2 {
    text-align: center;
  }
`

const SplashScreen = () => {
  return (
    <StaticQuery
      query={graphql`
        query getSplashScreenContent {
          file(name: { eq: "splash-screen" }) {
            childMarkdownRemark {
              frontmatter {
                text
                splashScreenImage {
                  childImageSharp {
                    original {
                      src
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        const fetchData = data.file.childMarkdownRemark.frontmatter
        const image = fetchData.splashScreenImage.childImageSharp.original.src
        const text = fetchData.text
        return (
          <SplashStyle>
            <div>
              <img src={image} alt="splash screen" />
              <h2> {text} </h2>
            </div>
          </SplashStyle>
        )
      }}
    />
  )
}

export default SplashScreen
