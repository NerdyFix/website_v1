import React from 'react';
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image';
import {Link} from 'gatsby'

const AboutBlurb = () => {

  const data = useStaticQuery(graphql`
    query {
      chicago: file(relativePath: { eq: "chicago.jpg" }) {
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
    <div className="about-blurb">
      <div className="container">
        <div className="inner-blurb">
          <div className="content">
            <h3>Personal Consulting</h3>
            <p> We cater to individuals and professionals, entrepreneurs,
                and businesses of various sizes.We advise our clients on
                how to use information technology to meet their personal or business objectives.
            </p>
          </div>
          <div className="images">
            <div className="top-right">
              <Img fluid={data.chicago.childImageSharp.fluid}/>
            </div>
            <div className="bottom-left">
              <Img fluid={data.meeting.childImageSharp.fluid}/>
            </div>
          </div>
        </div>
      </div>
      <div className="black-box"></div>
      <div className="black-box overlay"></div>
    </div>
  )
}

export default AboutBlurb
