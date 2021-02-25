import React, {FC, useState} from 'react';
import {Box} from '@material-ui/core';
import moduleName from '../../../Assets/Images/gearhead.png';
import envato from '../../../Assets/Images/envato.png';
import themedesigner from '../../../Assets/Images/themedesigner_FINAL.png';
import swan from '../../../Assets/Images/swan.png';
import johnys from '../../../Assets/Images/johnys.png';
import swanser from '../../../Assets/Images/swanser.png';
import './style.scss';

const Clients:FC = () => {
    const [clientList, setClientList] = useState<any[]>([
        moduleName, 
        envato, 
        themedesigner, 
        swan, 
        johnys, 
        swanser,
        swanser,
        johnys,
        swan,
        themedesigner,
        envato,
        moduleName
    ])
    return (
        <div id="clients">
            <Box display='flex' flexDirection='column' alignItems='center' className="container">
                <span className="sec-title">Awesome Clients</span>
                    <h2 className="sec-heading">SOME OF COOL CLIENTS</h2>
                    <p className="sec-desc text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellent esque dignissim eros a sapien tempus, ut eleifend neque <br /> 
                        convallis. Duis ac ligula nec sem fringilla. Mauris lacinia augue sagittis dolor.
                    </p>
                    <Box    display='flex' 
                            justifyContent='space-between' 
                            alignContent='space-between'
                            flexWrap='wrap' 
                            className="client-list">
                        {clientList.map((img:string) => (
                            <Box display='flex' alignItems='center' justifyContent='center' className="client-card">
                                <img src={img} alt="" />
                            </Box>
                        ))}
                    </Box>
            </Box>
        </div>
    )
}

export default Clients