import React from "react";

import {graphql, useStaticQuery } from "gatsby";

import BackgroundImage from 'gatsby-background-image';

import "../css/banner_middle.css";

//Main component for the background image
const BannerMiddle = ({path, children}) => {
    //Uses GraphQL query to find image
    const { graph_bgImage } = 
    useStaticQuery(
        graphql`
        query{
            graph_bgImage: file(relativePath: {eq: "rosette_night_neon.jpg"})
            {
                childImageSharp {
                    fluid(quality: 100, maxWidth: 4160) {
                      ...GatsbyImageSharpFluid
                    }
                  }
            }
        }`
        );

        const sources = [
            {
            ...graph_bgImage.childImageSharp.fluid
            }
          ]

    return (
        <BackgroundImage className='banner-middle-bg' fluid={sources}>
            {children}
        </BackgroundImage>
    );
}
export default BannerMiddle;