import React from "react";

import Benefits from "../Component/Benefits"
import HeroSlider from "../Component/HeroSlider"
import Navbar from "../Component/Navbar"
import OurWork from "../Component/OurWork"
import Circuit from "../Component/Circuit"
import Demand from "../Component/Demand"
import Footer from "../Component/Footer"
function Screener()
{


    return  (

        <div>

         {/* <Navbar/> */}
        <HeroSlider/>
        <Benefits/>
        <Demand/>
        <Circuit/>
        <OurWork/>
        {/* <Footer/> */}

        </div>

    )
}
export default Screener