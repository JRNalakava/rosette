import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import ReactMarkdown from 'react-markdown'
import scrollTo from 'gatsby-plugin-smoothscroll';

import "../css/hero_content.css"
import { GatsbyImage } from "gatsby-plugin-image";

const HeroContent = ({}) => {
//queries
    const data = useStaticQuery(graphql`
      query hero_text {
        strapiHomepage(hero_text: {}) {
          title
          hero_text {
            data {
              hero_text
            }
          }
          logo {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }`
      );

    const logo = data.strapiHomepage.logo.localFile.childImageSharp.gatsbyImageData;

    return(
        <div className="hero-frame">
            {/*Rendering Strapi content for 
            homepage title and hero_text*/}
            <GatsbyImage className='banner-logo' image={logo}></GatsbyImage>
            <div className='banner_text'>
            <ReactMarkdown>{data.strapiHomepage.hero_text.data.hero_text}</ReactMarkdown></div>
            <div className='btn-row'>
                <button
                    className='about-us-btn'
                    onClick={() => scrollTo('#about_us')}>
                        About Us
                </button>
                <button className='rent-btn'
                onClick={() => scrollTo('#rental')}>Rentals
                </button>
            </div>
        </div>
    )}

export default HeroContent