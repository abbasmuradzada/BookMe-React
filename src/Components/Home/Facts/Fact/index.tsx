import React, {FC} from 'react'
import './style.scss'
import {Box} from '@material-ui/core';
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';

interface IProps {
    head:string;
    // iconClass:string;
}

const Fact:FC<IProps> = ({head}:IProps) => {
    return (
        <div className="fact-card">
            <Box display='flex' justifyContent='space-between' alignItems='center' className="fact-icon-bg">
                {/* <AccessAlarm/> */}
            </Box>
            <h3 className="fact-header" >{head}</h3>
            <p className="fact-desc">Lorem ipsum dolor sit amet, consectetur adi
                elit. Pellent esque dignissim eros a sapien 
                ut eleifend neque convallis.</p>
        </div>
    )
}

export default Fact;