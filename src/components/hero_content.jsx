import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import ReactMarkdown from 'react-markdown'
import scrollTo from 'gatsby-plugin-smoothscroll';

import "../css/hero_content.css"

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
          }
    }
  `);

    return(
        <div className="hero-frame">
            {/*Rendering Strapi content for 
            homepage title and hero_text*/}
            <h1>{data.strapiHomepage.title}
            </h1>
            <div className='banner_text'>
            <ReactMarkdown>{data.strapiHomepage.hero_text.data.hero_text}</ReactMarkdown></div>
            <div className='btn-row'>
                <button className='rent_btn'
                onClick={() => scrollTo('#rental')}>Rentals
                </button>
                <button
                    className='about_us_btn'
                    onClick={() => scrollTo('#about_us')}>
                        About Us
                </button>
            </div>
        </div>
    )}

export default HeroContent