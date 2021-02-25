import React, {FC} from 'react';
import './style.scss';

const Slider:FC = () => {
    return (
        <div id="app-detail">
            <div className="add">+</div>
            <div className="container">
                <div className="header-details">
                    <span className="header-title" >Quality Accounting</span>
                    <h1 className="app-header">ACCOUNTING <br/>
                        DONE<span>.</span>RIGHT<span>.</span>FAST
                    </h1>
                    <p className="app-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellent
                        esque dignissim eros a sapien tempus, ut eleifend neque 
                        convallis. Duis ac ligula nec sem fringilla.
                    </p>
                    <div className="header-details_buttons">
                        <a href="">learn more</a>
                        <a href="">ask quote</a>
        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider