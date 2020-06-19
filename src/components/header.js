import { Link } from "gatsby"
import React from "react"
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image';

//https://www.youtube.com/watch?v=ByqLscgK90s


const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      nerdyfix: file(relativePath: { eq: "NerdyFix-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return(
  <header>
    <div className = "container">
      <div className = "inner-header">
        <div className = "logo">
          <Link to="/"> <Img fluid={data.nerdyfix.childImageSharp.fluid} fadeIn={false} durationFadeIn={0} /> </Link>
        </div>
        <div className = "navigation">
          <nav>
            <Link to="/AboutBlurb">About</Link>
            <Link to="/work">Work</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </div>
    </div>
  </header>
  )
}


export default Header
