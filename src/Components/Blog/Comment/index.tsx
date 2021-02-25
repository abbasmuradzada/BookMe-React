import React, {FC} from 'react'
import {Box} from '@material-ui/core';
import commentUser from '../../../Assets/Images/comment-user-pp.png'
import { Container, Row, Col } from 'reactstrap';
import {Divider} from '../Common'
import './style.scss';

interface IProps {
    owner: string;
    date:string;
    thanNow:string;
}

const Comment:FC<IProps> = ({owner, date, thanNow}:IProps) => {
    return (
        <Box width='100%' className='comment' display='flex' flexWrap='wrap' justifyContent='space-between' >
            <img src={commentUser} alt="" /> 
            <div className="comment-details d-flex flex-column justify-content-start">
                <div className="comment-details_heading d-flex flex-wrap justify-content-between">
                    <div className="comment-owner">{owner}</div>
                    <div className="comment-date">ON : <span>{date}</span>  &nbsp;&nbsp;{thanNow}</div>
                </div>
                <p className="sec-desc comment-details_desc">Sedut perspiciatis unde omnis istenatus error sit lorem voluptatem asantium aboutus doloremque laudantiumotam rem aperiam eaque beataeblandit.</p>
                <a className="comment-details_btn" href="">reply</a>
            </div>
            <Divider/>
        </Box>
    )
}

export default Comment