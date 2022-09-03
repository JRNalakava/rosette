import * as React from "react"
import HeroBG from "../components/hero_bg"
import HeroContent from "../components/hero_content"
import AboutUsBanner from "../components/about_us_banner"
import "../css/index.css"
import BannerMiddle from "../components/banner_middle"
import RentalBanner from "../components/rental_banner"
import Footer from "../components/footer"

const IndexPage = ({data}) => {
  return (
    <div className="index-container">
      <div className="hero-container">
        <HeroBG>
          <HeroContent/>
          </HeroBG>
      </div>
      <div className="about-us-container" >
        <AboutUsBanner/>
      </div>
      <BannerMiddle/>
      <RentalBanner/>
      <Footer title="Rosette" tagline="ACG"></Footer>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>The Rosette</title>

