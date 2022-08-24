import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import ReactMarkdown from 'react-markdown'

import "../css/about_us_banner.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import scrollTo from 'gatsby-plugin-smoothscroll';

const AboutUsBanner = ({}) => {
//queries
    const data = useStaticQuery(graphql`
    query about_us_text {
      strapiAboutUsBanner {
        text_a {
          data {
            text_a
          }
        }
        text_b {
          data {
            text_b
          }
        }
        img_a1 {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        img_a2 {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        img_b1 {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        img_b2 {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }    
  `);

    const img_a1 = data.strapiAboutUsBanner.img_a1.localFile.childImageSharp.gatsbyImageData;
    const img_a2 = data.strapiAboutUsBanner.img_a2.localFile.childImageSharp.gatsbyImageData;
    const img_b1 = data.strapiAboutUsBanner.img_b1.localFile.childImageSharp.gatsbyImageData;
    const img_b2 = data.strapiAboutUsBanner.img_b2.localFile.childImageSharp.gatsbyImageData;

    return(
        <div className="about_us_frame" id='about_us'>
        <h2>About the Rosette</h2>
            {/*Rendering Strapi content for 
            homepage title and hero_text*/}
            <div className="top-container">
              <div className="top-left-container text-card">
                <ReactMarkdown>{data.strapiAboutUsBanner.text_a.data.text_a}</ReactMarkdown>
                </div>
              <div className="top-right-container img-card">
                <GatsbyImage className="pretty_img" image={img_a1} alt={'Picture of the venue'} />
                <GatsbyImage className="pretty_img" image={img_a2} alt={'Picture of the venue'} />
              </div>
            </div>
            <div className="bottom-container">
              <div className="bottom-left-container img-card">
                <GatsbyImage className="pretty_img" image={img_b1} alt={'Picture of the venue'} />
                <GatsbyImage className="pretty_img" image={img_b2} alt={'Picture of the venue'} />
              </div>
              <div className="bottom-right-container text-card">
                <ReactMarkdown>{data.strapiAboutUsBanner.text_b.data.text_b}</ReactMarkdown>  
                <button className='rent_btn'
                onClick={() => scrollTo('#rental')}>Rent the Rosette
                </button>
              </div>
            </div>
        </div>
    )}

export default AboutUsBanner