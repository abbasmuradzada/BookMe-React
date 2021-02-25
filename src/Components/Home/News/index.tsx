import React from 'react'
import {Box} from '@material-ui/core';
import './style.scss'
import newsImg from '../../../Assets/Images/news.png'


const News = () => {
    return (
        <div id="news">
            <Box display='flex' flexWrap='wrap' justifyContent='space-between' className="container">
                <div className="news-main-section">
                    <span className="sec-title">Whats going on</span>
                    <h2 className="sec-heading">LATEST NEWS &
                        UPDATES
                    </h2>
                    <p className="sec-desc">Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit. Pellent esque dignissim eros a sapien tempus, 
                        ut eleifend neque convallis.
                    </p>
                    <a className="more-news" href="">Read more</a>
                </div>
                <div className="news-card">
                    <img src={newsImg} alt="" />
                    <p className="news-card_header">just been moved to my new office</p>
                    <p className="news-card_desc">Aug 12, 2015   In : <span>Accounting</span></p>
                    <a className="news-card_more">READ MORE <i className="fas fa-arrow-right"></i></a>
                </div>
                <div className="news-card">
                    <img src={newsImg} alt="" />
                    <p className="news-card_header">just been moved to my new office</p>
                    <p className="news-card_desc">Aug 12, 2015   In : <span>Accounting</span></p>
                    <a className="news-card_more">READ MORE <i className="fas fa-arrow-right"></i></a>
                </div>
            </Box>
        </div>
    )
}

export default News