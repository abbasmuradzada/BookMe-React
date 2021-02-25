import { type } from 'os';
import React, {FC, ReactNode} from 'react';
import {Box} from '@material-ui/core';
import './style.scss';

interface IProps {
    title:string;
    head:string;
    iconClass:string;
}

const Service:FC<IProps> = ({title, head, iconClass}:IProps) => {
    
    return (
        <Box display="flex" flexDirection="column" justifyContent="center" className="service-card">
            <i className={iconClass}></i>
            <p className="service-card-title">{title}</p>
            <h4 className="service-card-head">{head}</h4>
            <p className="service-card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing 
                elit. Pellent esque dignissim eros a sapien tempus, 
                ut eleifend neque convallis.
            </p>
            <a className="service-card-btn" href="">learn more</a>
        </Box>
    )
}

export default Service;