import React , {useRef} from "react"
import { useStaticQuery, graphql } from "gatsby"

import ReactMarkdown from 'react-markdown'
import "../css/rental_banner.css"

import Modal from "./modal"

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
            <div className='content-container'>
                <div className='fee-card'>
                    <div className="header-text">
                    <h1>What's included?</h1>
                    </div>
                    <div className="item-col">
                        <div className='row-item'>
                            <img src={data.strapiRentalBanner.access_icon.url}/>
                            <a onClick={() => {document.getElementById("rental-info").innerHTML = data.strapiRentalBanner.access_venue.data.access_venue}}>Access to the Venue</a>       
                        </div>
                        <div className='row-item'>
                            <img src={data.strapiRentalBanner.pre_event_icon.url}/>
                            <a onClick={() => {document.getElementById("rental-info").innerHTML = data.strapiRentalBanner.pre_event_tech_advisement.data.pre_event_tech_advisement}}>Event Planning/Tech Assistance</a>
                        </div>
                        <div className='row-item'>
                            <img src={data.strapiRentalBanner.mod_icon.url}/>
                            <a onClick={() => {document.getElementById("rental-info").innerHTML = data.strapiRentalBanner.manager_on_duty.data.manager_on_duty}}>Manager on Duty</a>
                        </div>
                        <div className='row-item'>
                            <img src={data.strapiRentalBanner.equipment_icon.url}/>
                            <a onClick={() => {document.getElementById("rental-info").innerHTML = data.strapiRentalBanner.equipment_access.data.equipment_access}}>Equipment Access</a>
                        </div>
                    </div>
                    
                </div>
                <div className='equipment-card'>
                    <div className="header-text">
                        <h1>Equipment Available</h1>
                    </div> 
                    <div className='equipment-icons'>
                        <div className='row-item-v'>
                            <img className="center" src={data.strapiRentalBanner.house_icon.url}/>
                            <a onClick={() => {document.getElementById("rental-info").innerHTML = data.strapiRentalBanner.house_venue_lobby.data.house_venue_lobby}}>House/Venue/Lobby</a></div>
                        <div className='row-item-v'>
                            <img className="center" src={data.strapiRentalBanner.tech_icon.url}/>
                            <a onClick={() => {document.getElementById("rental-info").innerHTML = data.strapiRentalBanner.technology.data.technology}}>Technology</a>
                        </div>
                        <div className='row-item-v'>
                            <img className="center" src={data.strapiRentalBanner.misc_icon.url}/>
                            <a onClick={() => {document.getElementById("rental-info").innerHTML = data.strapiRentalBanner.miscellaneous.data.miscellaneous}}>Miscellaneous</a>
                        </div>
                    </div>
                    <div className="btn-row">
                        <a className='contact-btn' href="https://www.austinclassicalguitar.org/contact-acg/">Contact Us</a>
                    </div>
                </div>
            </div>

            <div id="rental-info" className="learn-more">
                        <p>Click on an item to learn more about it</p>
                    </div>
        </div>
    )
}

export default RentalBanner;