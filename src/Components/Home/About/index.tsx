import React, {FC} from 'react'
import {Box} from '@material-ui/core';
import './style.scss'; 
import aboutImg from "../../../Assets/Images/about-bg.png";
import tick from '../../../Assets/Images/tick.png'
import loaction from '../../../Assets/Images/location.png'
import browser from '../../../Assets/Images/browser.png'

const About:FC = () => {
    return (
        <div id="about">
            <Box display='flex' flexWrap='wrap' justifyContent='space-between' className="container">
                <div className="about-details">
                    <span className="sec-title">Something about me</span>
                    <h2 className="sec-heading">WELL ORGANIZED. <br/>
                        TRUSTED BY THOUSANDS.
                    </h2>
                    <p className="sec-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus interdum urna. 
                        Phasellus ac lorem ut tellus ornare condimentum. Nulla facilisi. Nulla at facilisis nibh, 
                        in ultricies arcu. Fusce elementum mollis eros, vel ultricies enim consequat in. 
                        <br/><br/>
                        Proin diam turpis, semper vitae libero at, pulvinar eleifend lacus. Maecenas vel nisi 
                        dignissim, rutrum metus sit amet, facilisis enim. Maecenas quis elit viverra eros 
                        congue pulvinar eu et est. Nam commodo semper nunc,
                    </p>
                    <Box display='flex' justifyContent='space-between' className="about-details_properties">
                        <div className="about-prop">
                            <div className="connection-line"></div>
                            <img className="about-prop_img" src={tick} alt=""/>
                            <p className="about-prop_desc">
                                ONTIME EVERYTIME
                                at service
                            </p>
                        </div>
                        <div className="about-prop">
                            <div className="connection-line"></div>
                            <img className="about-prop_img" src={loaction} alt=""/>
                            <p className="about-prop_desc">
                                Available at your
                                location
                            </p>
                        </div>
                        <div className="about-prop">
                            <img className="about-prop_img" src={browser} alt=""/>
                            <p className="about-prop_desc">
                                Online booking
                                appointment
                            </p>
                        </div>
                    </Box>
                    <a className="more-news" href="">Read more</a>
                </div>
                <div className="about-images d-flex justify-content-between">
                    <div className="about-images_img-column">
                        <img src={aboutImg} alt="" />
                        <img src={aboutImg} alt="" />
                    </div>
                    <div className="about-images_img-column">
                        <img src={aboutImg} alt="" />
                        <img src={aboutImg} alt="" />
                    </div>
                </div>
            </Box>
        </div>
    )
}

export default About