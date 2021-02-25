import React, {FC} from 'react';
import Service from './Service/index';
import {Box} from '@material-ui/core';

const Services:FC = () => {
    return (
        <Box width='100%' display='flex' justifyContent='space-between' flexWrap='wrap' id="services">
            <Service title='Awesome Service' head='GENERAL ACCOUNTING' iconClass='fas fa-suitcase' />
            <Service title='Awesome Service' head='TAX CONSULTING' iconClass='far fa-building' />
            <Service title='Well Focused' head='ADMIN SERVICES' iconClass='fas fa-pencil-alt' />
        </Box>
    )
}

export default Services;
