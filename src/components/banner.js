import React from 'react';
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image';

const Banner = () => {

  const data = useStaticQuery(graphql`
    query {
      blackbox: file(relativePath: { eq: "blackbox.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      laptop: file(relativePath: { eq: "laptop.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      meeting: file(relativePath: { eq: "meeting.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="side-image left">
            <Img fluid={data.blackbox.childImageSharp.fluid} />
          </div>
          <div className="main-text">technology consulting</div>
          <div className="main-image">
            <Img fluid={data.blackbox.childImageSharp.fluid} />
          </div>
          <div className="side-image right">
            <Img fluid={data.blackbox.childImageSharp.fluid} />
          </div>
        </div>
        <div className="scroll">
          <span>Scroll</span>
        </div>
      </div>
      <div className="fixed-misc">NerdyFix Group</div>
    </div>
  )
}

export default Banner
