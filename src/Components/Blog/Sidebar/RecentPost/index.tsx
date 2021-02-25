import React, {FC} from 'react'
import { SideBarTitle} from '../../Common';
import {Box} from '@material-ui/core';
import './style.scss';

interface IProps {
    title : string;
    date : string;
    imgUrl? : string;
}

const RecentPost:FC<IProps> = ({title, date, imgUrl}:IProps) => {
    return (
        <>
            <Box display='flex' className="recent-post">
                <img src={imgUrl} alt="" />
                <div className="recent-post_details">
                    <h6 className="recent-post_details_heading">{title}</h6>
                    <span className="recent-post_details_desc">{date}</span>
                </div>
            </Box>
        </>
    )
}

export default RecentPost;