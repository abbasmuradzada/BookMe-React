import React, {FC, useState} from 'react'
import calendarImg from '../../../Assets/Images/calendar.png'
import {Box} from '@material-ui/core';
import envatoWhite from '../../../Assets/Images/envato1.png'
import './style.scss'

const Book:FC = () => {
    const [logoList, setLogoList] = useState<string[]>([envatoWhite, envatoWhite, envatoWhite])
    return (
        <div id="book">
            <Box display='flex' flexWrap='wrap' justifyContent='space-between' className="container">
                <div className="book-details">
                    <span className="sec-title">Satisfied?</span>
                    <h2 className="sec-heading">AWESOME. <br />
                        BOOK ME NOW.
                    </h2>
                    <p className="sec-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus 
                        interdum urna. Phasellus ac lorem ut tellus ornare condimentum. Nulla 
                        facilisi. Nulla at facilisis nibh, in ultricies arcu.
                    </p>
                    <p className="featured">I am featured on</p>
                    <Box display='flex' flexWrap='wrap' className="book-companies">
                        {logoList.map((imgUrl:any) => (
                            <img src={imgUrl} alt="" />
                        ))}
                    </Box>
                </div>
                <div className="book-calendar">
                    <img src={calendarImg} alt="" />
                </div>
            </Box>
        </div>
    )
}

export default Book