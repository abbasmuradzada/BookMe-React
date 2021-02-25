import React, {FC} from 'react'
import Feature from './Feature'
import {Box} from '@material-ui/core';
import './style.scss'

const AboutMe:FC = () => {
    return (
        <div id="about-me">
            <Box display="flex" justifyContent='space-between' flexDirection='column' className="container">
                <span className="sec-title">Something About Me</span>
                <h2 className="sec-heading">WELL ORGANIZED. TRUSTED BY THOUSANDS.</h2>
                <p className="sec-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellent esque dignissim eros a sapien tempus, ut eleifend neque <br />
                    convallis. Duis ac ligula nec sem fringilla. Mauris lacinia augue sagittis dolor.
                </p>
                <Box display='flex' flexWrap='wrap' justifyContent='space-between' className="about-me_list">
                    <Feature name='ON TIME EVERYTIME' icon='fas fa-history' />
                    <Feature name='AVAILABLE AT YOUR LOCATION' icon='fas fa-globe-europe' />
                    <Feature name='ONLINE BOOKING OPTION' icon='far fa-calendar-alt' />
                </Box>
                <div className="about-me_buttons">
                    <a className="more-news" href="">learn more</a>
                    <a className="more-news" href="">Book now</a>
                </div>
            </Box>
        </div>
    )
}

export default AboutMe;