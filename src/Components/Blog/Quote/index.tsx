import React, {FC} from 'react'
import {Box} from '@material-ui/core';
import './style.scss';

const Quote:FC = () => {
    return (
        <div id="quote">
            <Box display='flex' alignItems='center' justifyContent='space-between' className="container">
                <div className="quote-details">
                    <span className="sec-title">Free Estimate </span>
                    <h2 className="sec-heading">Request a Quote</h2>
                    <p className="sec-desc">Lorem ipsum dolor sit amet, consectetur adipiscing  elit. Pellent esque dignissim eros a sapien tempus, 
                        <br/> ut eleifend neque convallis.</p>
                </div>
                <a href="" className="get-quote">get a quote</a>
            </Box>
        </div>
    )
}

export default Quote