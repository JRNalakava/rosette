import React , {useRef} from "react"
import { useStaticQuery, graphql } from "gatsby"

import ReactMarkdown from 'react-markdown'
import "../css/rental_banner.css"
import scrollTo from 'gatsby-plugin-smoothscroll';

const RentalBanner = ({}) => {
    const modalRefAccess = useRef();
    
    const data = useStaticQuery(graphql`
    query rental{
        strapiRentalBanner {
            top_text {
                data {
                    top_text
                }
            }
            access_venue{
                data{
                    access_venue
                }
            }
            access_icon {
                url
            }
            pre_event_tech_advisement{
                data{
                    pre_event_tech_advisement
                }
            }
            pre_event_icon {
                url
            }
            manager_on_duty{
                data{
                    manager_on_duty
                }
            }
            mod_icon {
                url
            }
            equipment_access{
                data{
                    equipment_access
                }
            }
            equipment_icon {
                url
            }
            house_venue_lobby{
                data{
                    house_venue_lobby
                }
            }
            house_icon {
                url
            }
            technology{
                data{
                    technology
                }
            }
            tech_icon {
                url
            }
            miscellaneous{
                data{
                    miscellaneous
                }
            }
            misc_icon {
                url
            }
        }
    }`);

    return (
        <div className='rental-frame' id="rental">
            <div className='text-container'>
                <div className='title-section'>
                    <h1>Rent the Rosette</h1>
                </div>
                <ReactMarkdown>{data.strapiRentalBanner.top_text.data.top_text}</ReactMarkdown>
            </div>
            <div className="btn-row">
                        <a className='contact-btn' href="https://www.austinclassicalguitar.org/contact-acg/">Contact Us</a>
                </div>
            <div className='content-container'>
                <div className='fee-card'>
                    <div className="header-text">
                        <h1>What's included?</h1>
                    </div>
                    <ReactMarkdown>{data.strapiRentalBanner.access_venue.data.access_venue}</ReactMarkdown>
                    <ReactMarkdown>{data.strapiRentalBanner.pre_event_tech_advisement.data.pre_event_tech_advisement}</ReactMarkdown>
                    <ReactMarkdown>{data.strapiRentalBanner.manager_on_duty.data.manager_on_duty}</ReactMarkdown>
                    <ReactMarkdown>{data.strapiRentalBanner.equipment_access.data.equipment_access}</ReactMarkdown>
                </div>
                    <div className="header-text">
                        <h1>Equipment Available</h1>
                    </div> 
                    <ReactMarkdown>{data.strapiRentalBanner.house_venue_lobby.data.house_venue_lobby}</ReactMarkdown>
                    <ReactMarkdown>{data.strapiRentalBanner.technology.data.technology}</ReactMarkdown>
                    <ReactMarkdown>{data.strapiRentalBanner.miscellaneous.data.miscellaneous}</ReactMarkdown>
                    </div>
                </div>
    )
}

export default RentalBanner;