import React from 'react';
import Fact from './Fact';
import {Box} from '@material-ui/core';

import './style.scss';
const Facts = () => {
    return (
        <Box width='100%' id="facts">
            <Box display='flex' flexDirection='column' alignItems='center' className="container">
                <span className="sec-title">Some Cool Facts</span>
                <h2 className="sec-heading">WHY YOU SHOULD CHOOSE me</h2>
                <p className="sec-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellent esque dignissim eros a sapien tempus, ut eleifend neque 
                    convallis. Duis ac ligula nec sem fringilla. Mauris lacinia augue sagittis dolor.</p>
                <Box id="fact-list" display='flex' flexWrap='wrap' justifyContent='space-between'>
                    <Fact head = 'HARD WORKING. & ALWAYS ON TIME.'/>
                    <Fact head = 'Satisfaction Guaranteed always.'/>
                    <Fact head = 'INternational. & local accounting.'/>
                    {/* <div className="fact-card">
                        <div className="fact-icon-bg d-flex justify-content-center align-items-center">
                            <img src="./assets/images/clock.svg" alt="" />
                        </div>
                        <h3 className="fact-header" >HARD WORKING. <br /> & ALWAYS ON TIME.</h3>
                        <p className="fact-desc">Lorem ipsum dolor sit amet, consectetur adi
                            elit. Pellent esque dignissim eros a sapien 
                            ut eleifend neque convallis.</p>
                    </div>
                    <div className="fact-card">
                        <div className="fact-icon-bg d-flex justify-content-center align-items-center">
                            <img src="./assets/images/clock.svg" alt="" />
                        </div>
                        <h3 className="fact-header" >Satisfaction <br />
                            Guaranteed always.</h3>
                        <p className="fact-desc">Lorem ipsum dolor sit amet, consectetur adi
                            elit. Pellent esque dignissim eros a sapien 
                            ut eleifend neque convallis.</p>
                    </div>
                    <div className="fact-card">
                        <div className="fact-icon-bg d-flex justify-content-center align-items-center">
                            <img src="./assets/images/clock.svg" alt="" />
                        </div>
                        <h3 className="fact-header" >INternational. <br /> 
                            & local accounting.</h3>
                        <p className="fact-desc">Lorem ipsum dolor sit amet, consectetur adi
                            elit. Pellent esque dignissim eros a sapien 
                        ut eleifend neque convallis.</p>
                    </div> */}
                </Box>
            </Box>
        </Box>
    )
}

export default Facts