import React from "react";

import {graphql, useStaticQuery } from "gatsby";

import "../css/hero_bg.css"

import BackgroundImage from 'gatsby-background-image'

//Main component for the background image
const HeroBG = ({children}) => {
    //Uses GraphQL query to find image
    const {mobile_bgImage, desktop_bgImage} = useStaticQuery(graphql`
    query{
        desktop_bgImage: file(relativePath: {eq: "rosette_day_neon.jpg"})
        {
            childImageSharp {
                fluid(quality: 100, maxWidth: 4160) {
                  ...GatsbyImageSharpFluid
                }
              }
        }
        mobile_bgImage: file(relativePath: {eq: "venue_birds.jpg"})
        {
            childImageSharp {
                fluid(maxWidth: 1800, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
        }
    }`);
    const sources = [
        {
        ...mobile_bgImage.childImageSharp.fluid
        },
        {
        ...desktop_bgImage.childImageSharp.fluid,
        media: '(min-width: 901px)',
        },
      ]

    return (
        <BackgroundImage className={'banner-bg-top'} fluid={sources}>{children}</BackgroundImage>
    );
}
export default HeroBG ;