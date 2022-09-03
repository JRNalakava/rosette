import React from "react"
import { Link } from "gatsby"

import scrollTo from 'gatsby-plugin-smoothscroll';
import "../css/footer.css"

const Footer = (props) => (
    <div className="acg-footer acg-clearfix">
		<div className="acg-footer-copy">
			<div className="acg-menu-wrapper">
				<div>
                    <ul className="acg-menu">
                        {/* <li><Link to="/">Rosette</Link></li> */}
                        <li>
                            <a onClick={() => scrollTo('#about_us')}>About Us</a></li>
                        <li>
                            <a onClick={() => scrollTo('#rental')}>Rentals</a>
                        </li>
                    </ul>
                </div>					
            </div>					
			<div className="acg-clear"></div>
			<p className="acg-copyright">© {(new Date().getFullYear())} <Link to="/">{props.title}</Link> | {props.tagline}</p>
		</div>				
	</div>
)

export default Footer