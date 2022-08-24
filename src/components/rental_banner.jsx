import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import ReactMarkdown from 'react-markdown'
import { StaticImage } from "gatsby-plugin-image"
import "../css/rental_banner.css"

const RentalBanner = ({}) => {
    const data = useStaticQuery(graphql`
    query rental {
        strapiRentalBannerTextTextnode {
            text
          }
    }
  `);
    return (
        <div className='rental-frame' id="rental">
            <div className='text-container'>
                <div className='title-section'>
                    <h1>Rent the Rosette</h1>
                </div>
                <ReactMarkdown>{data.strapiRentalBannerTextTextnode.text}</ReactMarkdown>
            </div>
            <div className='content-container'>
                <div className='fee-card'>
                    <div className="header-text">
                    <h1>What's included in the fee?</h1>
                    </div>
                    <div className="item-col">
                        <div className='row-item'>
                            <StaticImage 
                            src="../images/icons/door-open-fill.svg" 
                            alt="open door"  
                            width={150}
                            height={150}
                            placeholder="blurred"
                            />
                            <a>Access to The Venue</a>
                        </div>
                        <div className='row-item'>
                            <StaticImage 
                            src="../images/icons/calendar-todo-fill.svg"
                            alt="calendar"
                            width={150}
                            height={150}
                            placeholder="blurred"/>
                            <a>Event Planning/Tech Assistance</a>
                        </div>
                        <div className='row-item'>
                            <StaticImage 
                            src="../images/icons/user-star-line.svg"
                            alt="manager"
                            width={150}
                            height={150}
                            placeholder="blurred"/>
                            <a>Manager on Duty</a>
                        </div>
                        <div className='row-item'>
                            <StaticImage 
                            src="../images/icons/tools-line.svg"
                            alt="equipment"
                            width={150}
                            height={150}
                            placeholder="blurred" />
                            <a>Equipment Access</a>
                        </div>
                    </div>
                    
                </div>
                <div className='equipment-card'>
                    <div className="header-text">
                        <h1>Equipment Available</h1>
                    </div> 
                    <div className='equipment-icons'>
                        <div className='row-item-v'>
                            <StaticImage 
                            src="../images/icons/tools-line.svg"
                            alt="equipment"
                            width={150}
                            height={150}
                            placeholder="blurred" />
                            <a>House/Venue/Lobby</a></div>
                        <div className='row-item-v'>
                            <StaticImage 
                            src="../images/icons/sound-module-fill.svg"
                            alt="equipment"
                            width={150}
                            height={150}
                            placeholder="blurred" />
                            <a>Technology</a>
                        </div>
                        <div className='row-item-v'>
                            <StaticImage 
                            src="../images/icons/apps-line.svg"
                            alt="equipment"
                            width={150}
                            height={150}
                            placeholder="blurred" />
                            <a>Miscellaneous</a>
                        </div>
                    </div>
                    <div className="btn-row">
                        <a className='contact-btn' href="https://www.austinclassicalguitar.org/contact-acg/">Contact Us</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RentalBanner;